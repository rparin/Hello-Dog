"use server";
import { DogImageCeoSchema } from "../schema/DogImageCeo";

export async function getCeoDogImage(breedUrl: string) {
  const res = await fetch(
    `https://dog.ceo/api/breed/${breedUrl}/images/random`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );
  const data = await res.json();
  const result = DogImageCeoSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Ceo Image: Invalid API Response format");
  } else {
    return await result.data;
  }
}
