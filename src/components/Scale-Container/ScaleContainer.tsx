import { cn } from "@/lib/utils";
import Progressbar from "./Progressbar";
import { DogInfoScale } from "@/lib/schema/DogInfoScale";

export default function ScaleContainer({
  className,
  title,
  scales,
}: {
  className?: string;
  title: string;
  scales: Array<DogInfoScale>;
}) {
  const barItems = scales.map((item) => {
    return (
      <Progressbar
        className="overflow-auto md:mb-1"
        key={item.name}
        barValue={item}
      ></Progressbar>
    );
  });

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-accent text-black",
        className,
      )}
    >
      <h1 className="text-base leading-none md:text-xl">{title}</h1>
      {barItems}
    </div>
  );
}
