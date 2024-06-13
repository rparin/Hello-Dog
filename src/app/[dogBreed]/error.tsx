"use client";

import { useEffect } from "react";
import Border from "@/components/Border";
import CountdownNavigateTo from "@/components/CountdownNavigateTo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <main>
      <Border
        styling={{
          innerClassName:
            "flex flex-col h-full w-full justify-center text-center gap-5",
        }}
      >
        <h1 className="text-2xl leading-none text-black/80 md:text-3xl">
          Sorry we could not fetch your dogs
        </h1>
        <h2 className="text-base leading-none text-black/80 md:text-xl">
          Returning to the home page in:
          <CountdownNavigateTo className="pl-1" href={"/"} countdown={5000} />
        </h2>
        <h3 className="mb-60 text-sm text-black/80 md:text-base">
          (Internal Server Error)
        </h3>
      </Border>
    </main>
  );
}
