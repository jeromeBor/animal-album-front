'use server';

import { revalidatePath } from 'next/cache';

const API_URL = 'http://localhost:5000'; // L'URL de ton serveur local

export async function deleteAnimalAction(id: string | number) {
  try {
    const response = await fetch(`${API_URL}/animals/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression sur le serveur');
    }

    // 🔄 Très important : on demande à Next.js de rafraîchir la liste
    revalidatePath('/animals');

    return { success: true };
  } catch (error) {
    console.error('Erreur action DELETE:', error);
    return { success: false, error: 'Impossible de supprimer' };
  }
}
