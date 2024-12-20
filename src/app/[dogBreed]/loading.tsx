import Border from "@/components/Border";
import getRandItem from "@/utils/getRandItem";
import { LoadingText } from "@data/LoadingText";

export default function loading() {
  return (
    <main>
      <Border className="h-full w-full content-center text-center">
        <h1 className="text-2xl text-black/80 md:text-3xl lg:text-4xl xl:text-5xl">
          {getRandItem(LoadingText)}
        </h1>
      </Border>
    </main>
  );
}
