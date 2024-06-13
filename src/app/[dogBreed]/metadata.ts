import { publicParsedEnv } from "@env/publicEnv";
import type { Metadata, ResolvingMetadata } from "next";

// const twitter =  {
//   card: 'Todo: summary_large_image',
//   site: 'Todo: site',
//   title: og.title,
//   description: og.description,
//   image: 'Todo: Image'
// }

export type Props = {
  params: { dogBreed: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function getMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  const og = {
    type: "website",
    url: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}/${params.dogBreed.replace(/-/g, "_")}`,
    title: `Hello Dog - ${params.dogBreed.replace(/_/g, " ")}`,
    description:
      "A website that brings you interesting dog facts, stunning dog images, and detailed dog information. Dog facts are sourced from Dog API, photos are from Unsplash or Dog.ceo, and dog breed details are retrieved from API Ninjas.",
    siteName: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`,
    images: [
      {
        url: "TBD",
      },
    ],
    // twitter: twitter
  };

  return {
    title: og.title,
    metadataBase: new URL(`${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`),
    description: og.description,
    openGraph: og,
  };
}
