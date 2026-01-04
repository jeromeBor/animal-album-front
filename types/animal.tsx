// types/animal.ts
export interface Animal {
  id: string | number;
  name: string;
  species: string;
  description: string;
  image?: string; // Le "?" indique que c'est optionnel
}
