'use client';
import React, { useEffect, useState } from 'react';
import { CommonCard } from '@/components/common/card';

interface Animal {
  id: number | string;
  name: string;
  species: string;
  description: string;
}

interface AnimalListProps {
  // Les données initiales sont passées par le Server Component
  initialAnimals: Animal[];
}

export default function AnimalIndex({ initialAnimals }: AnimalListProps) {
  const [displayedAnimals, setDisplayedAnimals] = useState(initialAnimals);

  return (
    <main style={{ padding: 24 }}>
      <div className="grid grid-cols-4 gap-4">
        {displayedAnimals.map((a) => (
          <CommonCard
            key={a.id}
            title={a.name}
            subtitle={a.species}
            description={a.description}
            customClassNames={{}}
          />
        ))}
      </div>
    </main>
  );
}
