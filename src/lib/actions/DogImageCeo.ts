"use server";

export async function getCeoDogImage(breedUrl: "string") {
  // Cardigan_Corgi   ->  corgi/cardigan
  // Coton!de_Tulear  -> cotondetulear
  const res = await fetch(
    `https://dog.ceo/api/breed/${breedUrl}/images/random`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return await res.json();
}
