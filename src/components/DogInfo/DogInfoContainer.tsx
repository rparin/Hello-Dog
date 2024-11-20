import cn from "@/utils/cn";
import DogInfoItem, { dogInfoType } from "@/components/DogInfo/DogInfoItem";

export default function DogInfoContainer({
  className,
  title,
  info,
}: {
  className?: string;
  title: string;
  info: Array<dogInfoType>;
}) {
  const barItems = info.map((item) => {
    return (
      <DogInfoItem
        className="md:pb-1"
        key={item.name}
        dogInfo={item}></DogInfoItem>
    );
  });

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-accent text-black",
        className
      )}>
      <h2 className="text-base leading-none md:mb-0.5 md:text-xl">{title}</h2>

      <ul
        tabIndex={0}
        aria-label={`${title}`}
        className="hide-scrollbar flex h-full w-full flex-col overflow-auto">
        {barItems}
      </ul>
    </div>
  );
}
