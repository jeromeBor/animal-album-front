'use server';

import axios from 'axios';
import api from '@/lib/axios';
import { revalidatePath } from 'next/cache';
import {
  AnimalDTO,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from './services';

export async function createAnimalAction(data: AnimalDTO) {
  const result = await createAnimal(data);

  if (!result.errorMessage) {
    revalidatePath('/animals');
  }
  return result;
}

export async function updateAnimalAction(id: string | number, data: AnimalDTO) {
  const result = await updateAnimal(id, data);

  revalidatePath('/animals');

  if (!result.errorMessage) {
    revalidatePath('/animals');
    revalidatePath(`/animals/${id}`); // Optionnel: rafraîchit aussi la page de détails
  }
  return result;
}

export async function deleteAnimalAction(id: string | number) {
  const result = await deleteAnimal(id);

  if (!result.errorMessage) {
    revalidatePath('/animals');
  }
  return result;
}
