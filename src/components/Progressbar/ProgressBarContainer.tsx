import cn from "@/utils/cn";
import ProgressbarItem from "@/components/Progressbar/ProgressbarItem";
import { DogInfoItem } from "@/schema/DogBreedInfo";

export default function ProgressbarContainer({
  className,
  title,
  scales,
}: {
  className?: string;
  title: string;
  scales: Array<DogInfoItem>;
}) {
  const barItems = scales.map((item) => {
    return (
      <ProgressbarItem
        className="md:pb-1"
        key={item.name}
        barInfo={item}></ProgressbarItem>
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
