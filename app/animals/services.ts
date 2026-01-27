import api from '@/lib/axios';
import { formatResponse } from '@/utils/api-helper';

export interface Animal {
  id: number;
  name: string;
  birthdate: string;
  description: string | null;
  image: string | null;
}

export type AnimalDTO = Omit<Animal, 'id' | 'image'>;

export async function getAnimals() {
  try {
    const response = await api.get('/animals');
    return formatResponse(response); // Cohérence totale !
  } catch (error) {
    return formatResponse(error, 'animals');
  }
}

export async function getAnimalById(id: string | number) {
  try {
    const response = await api.get(`/animals/${id}`);
    return formatResponse(response);
  } catch (error: unknown) {
    return formatResponse(error, 'animal', id);
  }
}

export async function createAnimal(newAnimalData: AnimalDTO) {
  try {
    const response = await api.post('/animals', newAnimalData);
    return formatResponse(response);
  } catch (error) {
    return formatResponse(error, 'animal');
  }
}

export async function updateAnimal(
  id: string | number,
  newAnimalData: AnimalDTO
) {
  try {
    const response = await api.put(`/animals/${id}`, newAnimalData);

    return formatResponse(response);
  } catch (error) {
    return formatResponse(error, 'animal');
  }
}

export async function deleteAnimal(id: string | number) {
  try {
    const response = await api.delete(`/animals/${id}`);
    return formatResponse(response);
  } catch (error) {
    return formatResponse(error, 'animal', id);
  }
}
