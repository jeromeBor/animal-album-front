// Action pour supprimer un animal
export async function deleteAnimalAction(id: string | number) {
  try {
    // 1. Logique de suppression réelle en base de données
    await db.animal.delete({
      where: { id: id },
    });

    // 2. MISE À JOUR DU CACHE (Crucial dans Next.js)
    // Cela dit à Next.js de rafraîchir les données sur la page des animaux
    revalidatePath('/animals');

    return { success: true };
  } catch (error) {
    console.error('Erreur suppression:', error);
    throw new Error('Impossible de supprimer cet animal.');
  }
}

// Action pour éditer un animal
export async function updateAnimalAction(id: string | number, data: any) {
  // ... logique d'update ...
  revalidatePath('/animals');
}
