import { getMetadata } from "./metadata";

export async function generateMetadata({
  params,
}: {
  params: { dogBreed: string };
}) {
  return getMetadata({ params });
}

export default function dogResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
