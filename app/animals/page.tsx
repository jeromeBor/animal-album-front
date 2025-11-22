// ❌ AUCUN 'use client'; ici ! C'est un Server Component.
import { getAllAnimals, deleteAnimal, editAnimal } from '../../utils/animals'; // Assurez-vous que fetchAnimals n'est pas client-side seulement

import AnimalList from './AnimalList';
interface Animal {
  id: number | string;
  name: string;
  image: string;
  species: string;
  description: string;
}

// 💡 Le fetching se fait directement et sans hooks.
async function getAnimalsData(): Promise<Animal[]> {
  return getAllAnimals();
}

export default async function AnimalIndex() {
  // 🚀 Fetching des données ultra-rapide côté Serveur
  const animals = await getAnimalsData();

  return (
    <main style={{ padding: 24 }}>
      <h1>Animals</h1>

      <AnimalList initialAnimals={animals} />
      {/* {animals.map((a) => (
          // Le rendu de la liste est statique, donc il reste côté serveur.
          <CommonCard
            key={a.id}
            title={a.name}
            subtitle={a.species}
            description={a.description}
            customClassNames={{}}
          />
        ))} */}
      {/* Si vous aviez un bouton "Ajouter" ou "Filtrer", vous l'importeriez ici */}
      {/* Exemple: <ClientAnimalControls initialAnimals={animals} /> */}
    </main>
  );
}
