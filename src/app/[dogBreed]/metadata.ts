import { publicParsedEnv } from "@env/publicEnv";
import type { Metadata, ResolvingMetadata } from "next";
import { DESCRIPTION } from "@/constants/webInfo";

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

export async function getMetadata({
  params,
}: {
  params: { dogBreed: string };
}) {
  const og = {
    type: "website",
    url: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}/${params.dogBreed.replace(/-/g, "_")}`,
    title: `Hello Dog - ${params.dogBreed.replace(/_/g, " ")}`,
    description: DESCRIPTION,
    siteName: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`,
    images: [
      {
        url: "https://raw.githubusercontent.com/rparin/Hello-Dog/main/_preview/Banner.png",
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
