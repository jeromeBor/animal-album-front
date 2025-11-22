'use client';
import React, { useEffect, useState } from 'react';
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
  // Les données initiales sont passées par le Server Component
  initialAnimals: Animal[];
}

export default function AnimalIndex({ initialAnimals }: AnimalListProps) {
  const [displayedAnimals, setDisplayedAnimals] = useState(initialAnimals);
  const router = useRouter();

  const editHandler = (id: number | string) => {
    const path = `animals/edit/${id}`;
    // TODO: implement edit logic (e.g., open modal, redirect to edit page)
    router.push(path);
  };

  const deleteHandler = (id: number | string) => {
    setDisplayedAnimals(displayedAnimals.filter((animal) => animal.id !== id));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {displayedAnimals.map((a) => (
        <CommonCard
          key={a.id}
          title={a.name}
          subtitle={a.species}
          description={a.description}
          handleDelete={() => deleteHandler(a.id)}
          handleEdit={() => editHandler(a.id)}
          customClassNames={{}}
        />
      ))}
    </div>
  );
}
