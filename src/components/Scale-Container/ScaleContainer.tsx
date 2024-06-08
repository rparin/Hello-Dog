import { cn } from "@/lib/utils";
import Progressbar from "./Progressbar";
import { barType } from "./Progressbar";

export default function ScaleContainer({
  className,
  title,
  scales,
}: {
  className?: string;
  title: string;
  scales: Array<barType>;
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
      <h1 className="text-sm leading-none md:text-xl">{title}</h1>
      {barItems}
    </div>
  );
}
