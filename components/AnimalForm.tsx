'use client';

import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { createAnimalAction, updateAnimalAction } from '../app/animals/actions';
import { Animal, AnimalDTO } from '../app/animals/services';
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

interface AnimalFormProps {
  initialData?: Animal | null;
}

export default function AnimalForm({ initialData }: AnimalFormProps) {
  const [isPending, startTransition] = useTransition();
  // 3. Initialisation du Formulaire : on utilise l'interface AnimalFormData
  const form = useForm<AnimalDTO>({
    defaultValues: {
      name: initialData?.name || '',
      birthdate: initialData?.birthdate
        ? initialData.birthdate.split('T')[0]
        : '', // Format YYYY-MM-DD
      description: initialData?.description || '',
    },
  });

  async function onSubmit(values: AnimalDTO) {
    startTransition(async () => {
      const result = initialData?.id
        ? await updateAnimalAction(initialData.id, values)
        : await createAnimalAction(values);

      if (result.errorMessage) {
        // Ici, tu pourrais utiliser un toast.error(result.errorMessage)
        alert(result.errorMessage);
      } else {
        alert(initialData ? 'Animal mis à jour !' : 'Animal créé !');
        if (!initialData) form.reset();
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold">🦁 Fiche de l'animal</h2>

        {/* CHAMP NOM */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Nox" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CHAMP DATE DE NAISSANCE */}
        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de naissance</FormLabel>
              <FormControl>
                <Input type="date" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CHAMP DESCRIPTION */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Racontez son histoire..."
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isPending ? 'Enregistrement...' : 'Sauvegarder'}
        </button>
      </form>
    </Form>
  );
}
