export const PAGE =
  process.env.NODE_ENV == "test"
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : "https://hello-dog.vercel.app";
