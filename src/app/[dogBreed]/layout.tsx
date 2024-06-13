import type { Metadata, ResolvingMetadata } from "next";
import { Props, getMetadata } from "./metadata";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return getMetadata({ params, searchParams }, parent);
}

export default function dogResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
