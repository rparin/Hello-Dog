"use server";
import { DogImageCeoSchema } from "../schema/DogImageCeo";

export async function getCeoDogImage(breedUrl: string) {
  var res;

  try {
    res = await fetch(`https://dog.ceo/api/breed/${breedUrl}/images`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Dog Ceo Image: Fetch Error", { cause: error });
  }

  if (!res?.ok) {
    throw new Error("Dog Ceo Image: Response Error", {
      cause: `HTTP Response Code: ${res?.status}`,
    });
  }

  const data = await res.json();
  const result = DogImageCeoSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Ceo Image: Invalid API Response format", {
      cause: result.error,
    });
  } else {
    return await result.data;
  }
}
