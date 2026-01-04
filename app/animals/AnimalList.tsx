'use client';
import React, { useOptimistic, useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { CommonCard } from '@/components/common/card';

interface Animal {
  id: number | string;
  name: string;
  image: string;
  species: string;
  description: string;
}

interface AnimalListProps {
  initialAnimals: Animal[];
}

export default function AnimalList({ initialAnimals }: AnimalListProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // 1️⃣ UTILISATION DE USEOPTIMISTIC
  // On définit l'état optimiste : par défaut, ce sont nos animaux initiaux.
  const [optimisticAnimals, removeOptimisticAnimal] = useOptimistic(
    initialAnimals,
    (state, idToRemove: number | string) => {
      // Cette logique s'exécute immédiatement côté client
      return state.filter((animal) => animal.id !== idToRemove);
    }
  );

  // 2️⃣ USECALLBACK POUR LA STABILITÉ
  // On mémorise la fonction pour qu'elle ne change pas d'adresse mémoire inutilement
  const handleEdit = useCallback(
    (id: string | number) => {
      router.push(`/animals/edit/${id}`);
    },
    [router]
  );

  const handleDelete = useCallback(
    (id: string | number) => {
      startTransition(async () => {
        // On retire l'animal visuellement avant la réponse du serveur
        removeOptimisticAnimal(id);

        // On lance la vraie action sur la base de données
        await deleteAnimalAction(id);
      });
    },
    [removeOptimisticAnimal]
  );

  return (
    <div className={`grid grid-cols-4 gap-4 ${isPending ? 'opacity-80' : ''}`}>
      {' '}
      {optimisticAnimals.map((animal) => (
        <CommonCard
          key={animal.id}
          animal={animal} // ✅ On passe l'objet entier
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
