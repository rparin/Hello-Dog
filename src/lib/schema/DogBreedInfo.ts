import { z } from "zod";
import { DogInfoValueSchema } from "./DogInfoScale";

export const DogBreedInfoSchema = z.array(
  z.object({
    name: z.string(),
    image_link: z.string().url(),
    good_with_children: DogInfoValueSchema,
    good_with_other_dogs: DogInfoValueSchema,
    good_with_strangers: DogInfoValueSchema,
    shedding: DogInfoValueSchema,
    grooming: DogInfoValueSchema,
    drooling: DogInfoValueSchema,
    coat_length: DogInfoValueSchema,
    playfulness: DogInfoValueSchema,
    protectiveness: DogInfoValueSchema,
    trainability: DogInfoValueSchema,
    energy: DogInfoValueSchema,
    barking: DogInfoValueSchema,
    min_life_expectancy: z.number(),
    max_life_expectancy: z.number(),
    max_height_male: z.number(),
    max_height_female: z.number(),
    max_weight_male: z.number(),
    max_weight_female: z.number(),
    min_height_male: z.number(),
    min_height_female: z.number(),
    min_weight_male: z.number(),
    min_weight_female: z.number(),
  }),
);
