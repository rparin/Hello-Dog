import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { getDogFact } from "@/lib/actions/DogFact";

export default async function DogFact({ className }: { className?: string }) {
  const dogFact = await getDogFact();
  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-center text-start text-black md:gap-0.5 lg:gap-1",
        className,
      )}
    >
      <div className="absolute right-3 top-0.5 z-50 flex w-full justify-end gap-1 text-xs opacity-40 lg:right-5">
        <p className="leading-none">Powered by Stratonauts Dog API</p>
        <a
          href="https://dogapi.dog"
          aria-label="External link to Stratonauts Dog API"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-[.6rem] w-auto" />
        </a>
      </div>
      <p className="mx-2 text-start text-base leading-none underline md:mx-3 lg:text-center lg:text-xl xl:mb-0.5">
        Random Dog Fact
      </p>
      <p className="mx-2 text-sm leading-none md:mx-3 lg:mx-4 lg:text-base">
        {dogFact.data[0].attributes.body}
      </p>
    </div>
  );
}
