import { z } from "zod";

export const DogImageCeoSchema = z.object({
  message: z.string(),
  status: z.string(),
});
