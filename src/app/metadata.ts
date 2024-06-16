import { publicParsedEnv } from "@env/publicEnv";
import { DESCRIPTION, PREVIEW } from "@/constants/webInfo";

const og = {
  type: "website",
  url: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`,
  title: "Hello Dog",
  description: DESCRIPTION,
  siteName: `${publicParsedEnv.NEXT_PUBLIC_CLIENT_URL}`,
  images: [
    {
      url: PREVIEW,
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
