import { z } from "zod";

export const DogInfoValueSchema = z.number().lte(5);

export const DogBreedInfoSchema = z.strictObject({
  name: z.string(),
  img: z.string().url(),
  goodWithChildren: DogInfoValueSchema,
  goodWithOtherDogs: DogInfoValueSchema,
  goodWithStrangers: DogInfoValueSchema,
  shedding: DogInfoValueSchema,
  grooming: DogInfoValueSchema,
  drooling: DogInfoValueSchema,
  coatLength: DogInfoValueSchema,
  playfulness: DogInfoValueSchema,
  protectiveness: DogInfoValueSchema,
  trainability: DogInfoValueSchema,
  energy: DogInfoValueSchema,
  barking: DogInfoValueSchema,
  minLifeExpectancy: z.number(),
  maxLifeExpectancy: z.number(),
  maxHeightMale: z.number(),
  maxHeightFemale: z.number(),
  maxWeightMale: z.number(),
  maxWeightFemale: z.number(),
  minHeightMale: z.number(),
  minHeightFemale: z.number(),
  minWeightMale: z.number(),
  minWeightFemale: z.number(),
});

export type DogBreedInfoValue = z.infer<typeof DogBreedInfoSchema>;
export type DogInfoValue = z.infer<typeof DogInfoValueSchema>;
