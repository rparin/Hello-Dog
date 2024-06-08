import { cn } from "@/lib/utils";
import Progressbar from "./Progressbar";

export default function ScaleContainer({
  className,
  title,
  scales,
}: {
  className?: string;
  title: string;
  scales: { title: string; value: number }[];
}) {
  const barItems = scales.map((item) => {
    return (
      <Progressbar
        className="md:mb-1"
        key={item.title}
        title={item.title}
        value={item.value}
      ></Progressbar>
    );
  });

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-accent text-black md:gap-1",
        className,
      )}
    >
      <h1 className="text-sm leading-none md:text-xl">{title}</h1>
      {barItems}
    </div>
  );
}
