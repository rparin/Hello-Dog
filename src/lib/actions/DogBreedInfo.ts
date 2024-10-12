"server-only";
import { parsedEnv } from "@env/env";
import { DogBreedInfoSchema } from "../schema/DogBreedInfo";

export async function getDogBreedInfo(breedName: string) {
  var res;

  try {
    res = await fetch(
      `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${breedName}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": parsedEnv.X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": parsedEnv.X_RAPIDAPI_HOST,
        },
      }
    );
  } catch (error) {
    throw new Error("DogBreedInfo: Fetch Error", { cause: error });
  }

  if (!res?.ok) {
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
    return result.data[0];
  }
}
