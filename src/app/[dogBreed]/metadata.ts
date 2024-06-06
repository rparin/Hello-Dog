import { publicParsedEnv } from "@env/publicEnv";

const og = {
  type: "website",
  url: "TBD",
  title: "Hello Dog - Doggo",
  description:
    "A website that brings you interesting dog facts, stunning dog images, and detailed dog information. Dog facts are sourced from Dog API, photos are from Unsplash or Dog.ceo, and dog breed details are retrieved from API Ninjas.",
  siteName: "TBD",
  images: [
    {
      url: "TBD",
    },
  ],
};

// const twitter =  {
//   card: 'Todo: summary_large_image',
//   site: 'Todo: site',
//   title: og.title,
//   description: og.description,
//   image: 'Todo: Image'
// }

const Metadata = {
  metadataBase: new URL(`${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`),
  title: og.title,
  description: og.description,
  openGraph: og,
  // twitter: twitter
};

export { Metadata };
