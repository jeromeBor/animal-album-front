import { revalidatePath } from 'next/cache';

const API_URL = process.env.API_URL_ENDPOINT;

// Action pour supprimer un animal
export async function deleteAnimalAction(id: string | number) {
  try {
    const response = await fetch(`${API_URL}/animals/${id}`, {
      method: 'DELETE',
    });

    // Cas 204 No Content (Succès)
    if (response.status === 204) {
      revalidatePath('/animals');
      return { success: true };
    }

    // Cas 404 (Géré par ton contrôleur)
    if (response.status === 404) {
      return { success: false, error: "Cet animal n'existe déjà plus." };
    }

    // Autres erreurs (500, etc.)
    throw new Error('Erreur serveur');
  } catch (error) {
    console.error('Erreur Action:', error);
    return { success: false, error: 'Impossible de joindre le serveur.' };
  }
}

export async function updateAnimalAction(id: string | number, data: object) {
  try {
    const response = await fetch(`${process.env.API_URL}/animals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      revalidatePath('/animals');
      return { success: true };
    }
  } catch (error) {
    console.error('Erreur update:', error);
    return { success: false };
  }
}
