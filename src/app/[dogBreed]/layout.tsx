import type { Metadata } from "next";
import { Metadata as mData } from "./metadata";

export const metadata: Metadata = mData;

export default function dogResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        {/* <Header /> */}
        {children}
      </div>
      {/* Display footer at the bottom */}
      {/* <Footer /> */}
    </main>
  );
}
