import { z } from "zod";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_CLIENT_URL: z.string().url({ message: "Invalid CLIENT URL" }),
});

export const publicParsedEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
});
