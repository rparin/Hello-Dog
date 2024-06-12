"use server";
import { parsedEnv } from "@env/env";
import { DogBreedInfoSchema } from "../schema/DogBreedInfo";

export async function getDogBreedInfo(breedName: string) {
  const res = await fetch(
    `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${breedName}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": parsedEnv.X_RapidAPI_Key,
        "X-RapidAPI-Host": parsedEnv.X_RapidAPI_Host,
      },
    },
  );
  const data = await res.json();
  const result = DogBreedInfoSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Breed Info: Invalid API Response format");
  } else {
    return result.data[0];
  }
}
