"use server";
import { parsedEnv } from "@env/env";

export async function getDogBreedInfo(breedName: string) {
  const res = await fetch(
    `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${breedName}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": parsedEnv.X_RapidAPI_Key,
        "X-RapidAPI-Host": parsedEnv.X_RapidAPI_Host,
      },
      // cache: "no-store",
    },
  );
  return await res.json();
}
