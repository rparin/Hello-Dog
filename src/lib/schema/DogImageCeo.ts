import { z } from "zod";

export const DogImageCeoSchema = z.strictObject({
  message: z.string(),
  status: z.string(),
});
