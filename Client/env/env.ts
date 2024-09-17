import { z } from "zod";

const envSchema = z.object({
  SERVER_URL: z.string().url(),
});

export const parsedEnv = envSchema.parse({
  SERVER_URL: process.env.SERVER_URL,
});
