import Link from "next/link";
import Image from "next/image";
import Border from "@/components/Border";
import { lostDogPoster } from "@/constants/images";
import CountdownNavigateTo from "@/components/CountdownNavigateTo";

export default function LostDog() {
  return (
    <main>
      <Border className="relative flex h-full flex-col items-center justify-center gap-0 text-center">
        <Image
          fill={true}
          src={lostDogPoster.img}
          alt={lostDogPoster.alt}
          priority
        />
        <h1 className="absolute bottom-0 w-full bg-border pt-1 leading-none text-black/80">
          <Link aria-label="Link to home page" className="underline" href={"/"}>
            Returning to the home page in:
          </Link>
          <CountdownNavigateTo
            className="pl-1 no-underline"
            href={"/"}
            countdown={5000}
          />
        </h1>
      </Border>
    </main>
  );
}
