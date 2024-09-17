import { z } from "zod";

export const DogFactSchema = z.strictObject({
  dogFact: z.string(),
});
