// Server-side fetch function (works in both server and client components)
export const getAllAnimals = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    console.log(`[getAllAnimals] Fetching from: ${baseUrl}/animals`);

    const res = await fetch(`${baseUrl}/animals`, {
      cache: 'no-store',
      timeout: 5000, // 5 second timeout
    });

    if (!res.ok) {
      console.error(`[getAllAnimals] API returned status ${res.status}`);
      return [];
    }

    const data = await res.json();
    console.log(`[getAllAnimals] Successfully fetched ${data.length} animals`);
    return data;
  } catch (err) {
    console.error(
      '[getAllAnimals] Error fetching animals:',
      err?.message || err
    );
    console.error(
      '[getAllAnimals] Make sure your API server is running at http://localhost:5000'
    );
    return [];
  }
};

export const deleteAnimal = async () => {};

export const editAnimal = async () => {};

// const animalService = { getAllAnimals, deleteAnimal, editAnimal };

// export default animalService;
