import { z } from "zod";

export const DogImageCeoSchema = z.strictObject({
  imgs: z.array(z.string()),
  len: z.number(),
});
