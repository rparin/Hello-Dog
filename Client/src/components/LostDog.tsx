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
        <h2 className="absolute bottom-0 w-full bg-border pt-1 leading-none text-black/80">
          Returning to the home page in:
          <CountdownNavigateTo className="pl-1" href={"/"} countdown={5000} />
        </h2>
      </Border>
    </main>
  );
}
