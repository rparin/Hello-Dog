import Border from "@/components/Border";
import { LoadingText } from "@data/LoadingText";

export default function loading() {
  var item = LoadingText[Math.floor(Math.random() * LoadingText.length)];

  return (
    <main>
      <Border
        styling={{ innerClassName: "h-full w-full content-center text-center" }}
      >
        <h1 className="text-2xl text-black/80 md:text-3xl lg:text-4xl xl:text-5xl">
          {item}
        </h1>
      </Border>
    </main>
  );
}
