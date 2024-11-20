"use server";
import { parsedEnv } from "@env/env";
import { DogFactSchema } from "@/schema/DogFact";
import { fromError } from "zod-validation-error";

export async function getDogFact(len: number = 120) {
  var res;

  try {
    res = await fetch(`${parsedEnv.SERVER_URL}/api/dogfact?max_length=${len}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
  } catch (error) {
    throw new Error("Dog Fact: Fetch Error", { cause: error });
  }

  if (!res?.ok) {
    throw new Error("Dog Fact: Response Error", {
      cause: `HTTP Response Code: ${res?.status}`,
    });
  }

  const data = await res.json();
  const result = DogFactSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Fact: Invalid API Response format", {
      cause: fromError(result.error).toString(),
    });
  } else {
    return result.data.dogFact;
  }
}
