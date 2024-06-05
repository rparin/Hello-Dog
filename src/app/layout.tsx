import type { Metadata } from "next";
import { Metadata as mData } from "./metadata";
import { Belanosima } from "next/font/google";
import "./globals.css";

const font = Belanosima({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = mData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
