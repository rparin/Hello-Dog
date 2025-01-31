import type { Metadata } from "next";
import { Metadata as mData } from "./metadata";
import { Belanosima } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const font = Belanosima({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = mData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
