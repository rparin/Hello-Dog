import type { Metadata } from "next";
import { Metadata as mData } from "./metadata";

export const metadata: Metadata = mData;

export default function dogResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
