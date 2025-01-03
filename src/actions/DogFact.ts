"server-only";
import { DogFactSchema } from "../schema/DogFact";
import { fromError } from "zod-validation-error";

export async function getDogFact() {
  var res;

  try {
    res = await fetch("https://dogapi.dog/api/v2/facts", {
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
    return result.data.data[0].attributes.body;
  }
}
