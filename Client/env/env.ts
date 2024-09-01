import { z } from "zod";

const envSchema = z.object({
  X_RapidAPI_Key: z
    .string()
    .length(50, { message: "Must be exactly 50 characters long" }),
  X_RapidAPI_Host: z.string(),
});

export const parsedEnv = envSchema.parse({
  X_RapidAPI_Key: process.env.X_RapidAPI_Key,
  X_RapidAPI_Host: process.env.X_RapidAPI_Host,
});
