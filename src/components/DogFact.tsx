import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { getDogFact } from "@/lib/actions/DogFact";
import { delay } from "@/lib/utils";

export default async function DogFact({ className }: { className?: string }) {
  var dogFact =
    'Upright, stiff, rapid tail movement is not wagging or "friendly" but indicates a dog who\'s rather excited and focused.';

  for (let i = 0; i < 3; i++) {
    var tempDogFact = await getDogFact();
    if (tempDogFact.length < dogFact.length) {
      dogFact = tempDogFact;
      break;
    }
    await delay(200);
  }

  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-center text-start text-black md:gap-0.5 lg:gap-1",
        className
      )}>
      <div className="absolute right-3 top-0.5 z-50 flex w-full justify-end gap-1 text-xs opacity-60 lg:right-5">
        <p className="leading-none">Powered by Stratonauts Dog API</p>
        <a
          href="https://dogapi.dog"
          aria-label="Stratonauts Dog API"
          target="_blank"
          rel="noopener noreferrer">
          <ExternalLink className="h-[.6rem] w-auto" />
        </a>
      </div>
      <h1 className="mx-2 text-start text-base leading-none underline md:mx-3 lg:text-center lg:text-xl xl:mb-0.5">
        Random Dog Fact
      </h1>
      <p className="mx-2 line-clamp-1 text-sm leading-none md:mx-3 lg:mx-4 lg:text-base">
        {dogFact}
      </p>
    </div>
  );
}
