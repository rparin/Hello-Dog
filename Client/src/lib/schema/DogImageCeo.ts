import { z } from "zod";

export const DogImageCeoSchema = z.strictObject({
  message: z.array(z.string()),
  status: z.string(),
});
