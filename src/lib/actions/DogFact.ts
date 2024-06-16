"use server";
import { DogFactSchema } from "../schema/DogFact";

export async function getDogFact() {
  var res;

  try {
    res = await fetch("https://dogapi.dog/api/v2/facts", {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json; charset=utf-8",
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
      cause: result.error,
    });
  } else {
    return result.data.data[0].attributes.body;
  }
}
