"use server";
import { parsedEnv } from "@env/env";
import { DogBreedInfoSchema } from "../schema/DogBreedInfo";

export async function getDogBreedInfo(breedName: string) {
  var res;

  try {
    res = await fetch(`${parsedEnv.SERVER_URL}/api/dogInfo/${breedName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("DogBreedInfo: Fetch Error", { cause: error });
  }

  if (!res?.ok) {
    console.log(res);
    throw new Error("DogBreedInfo: Response Error", {
      cause: `HTTP Response Code: ${res?.status}`,
    });
  }

  const data = await res.json();
  const result = DogBreedInfoSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Breed Info: Invalid API Response format", {
      cause: result.error,
    });
  } else {
    return result.data;
  }
}
