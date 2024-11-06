import { cn } from "@/lib/utils";
import Progressbar from "./Progressbar";
import { DogInfoScale } from "@/lib/schema/DogBreedInfo";

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
        className="md:pb-1"
        key={item.name}
        barValue={item}></Progressbar>
    );
  });

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-accent text-black",
        className
      )}>
      <h2 className="text-base leading-none md:text-xl">{title}</h2>
      <ul
        tabIndex={0}
        aria-label={`${title}`}
        className="hide-scrollbar flex h-full w-full flex-col overflow-auto">
        {barItems}
      </ul>
    </div>
  );
}
