import { z } from "zod";

export const DogInfoValueSchema = z.number().gt(0).lte(5).nullish();

export const DogInfoScaleSchema = z.object({
  name: z.string(),
  value: DogInfoValueSchema,
});

export type DogInfoScale = z.infer<typeof DogInfoScaleSchema>;
export type DogInfoValue = z.infer<typeof DogInfoValueSchema>;
