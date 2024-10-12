import { z } from "zod";

const envSchema = z.object({
  X_RAPIDAPI_KEY: z
    .string()
    .length(50, { message: "Must be exactly 50 characters long" }),
  X_RAPIDAPI_HOST: z.string(),
});

export const parsedEnv = envSchema.parse({
  X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
  X_RAPIDAPI_HOST: process.env.X_RAPIDAPI_HOST,
});
