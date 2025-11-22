'use client';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// 1. Définition des types de données du formulaire (le plus simple possible)
interface AnimalFormData {
  username: string;
}

// 2. Le composant est maintenant très simple et utilise seulement useForm
export default function AnimalForm() {
  // 3. Initialisation du Formulaire : on utilise l'interface AnimalFormData
  const form = useForm<AnimalFormData>({
    // On peut retirer 'resolver' car on n'utilise pas Zod.
    defaultValues: {
      username: '', // Valeurs par défaut
    },
  });

  // 4. Fonction de soumission
  function onSubmit(values: AnimalFormData) {
    // Les données soumises seront ici
    console.log('Formulaire soumis (simplifié):', values);
    alert(`Nom saisi: ${values.username}`);
  }

  return (
    // 5. Enveloppement du Formulaire
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-4 rounded-md border p-4"
      >
        <h2>🦁 Formulaire Édition Simple</h2>

        <FormField
          control={form.control} // Toujours nécessaire
          name="username" // Le nom doit correspondre à la clé dans AnimalFormData
          render={({ field }) => (
            <FormItem className="col-span-4 md:col-span-2">
              <FormLabel>Nom de Animal</FormLabel>
              <FormControl>
                {/* L'Input reçoit toutes les props de liaison (value, onChange, etc.) */}
                <Input placeholder="Tigre, Lion, etc." {...field} />
              </FormControl>
              <FormDescription>
                Ceci est le nom public de animal.
              </FormDescription>
              {/* Le FormMessage existera, mais n'affichera rien sans validation */}
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="col-span-4 rounded bg-blue-500 p-2 text-white"
        >
          Sauvegarder les modifications
        </button>
      </form>
    </Form>
  );
}
