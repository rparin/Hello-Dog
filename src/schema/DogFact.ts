import { z } from "zod";

export const DogFactSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      type: z.literal("fact"),
      attributes: z.object({
        body: z.string(),
      }),
    }),
  ),
});
