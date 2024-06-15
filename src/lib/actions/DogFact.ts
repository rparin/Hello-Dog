"use server";
import { DogFactSchema } from "../schema/DogFact";

export async function getDogFact() {
  const res = await fetch("https://dogapi.dog/api/v2/facts", {
    method: "GET",
    headers: {
      "Content-Type": "application/vnd.api+json; charset=utf-8",
    },
    cache: "no-store",
  });
  const data = await res.json();
  const result = DogFactSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dog Fact: Invalid API Response format");
  } else {
    return result.data.data[0].attributes.body;
  }
}
