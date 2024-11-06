import { cn } from "@/lib/utils";
import Infobar, { infoBarType } from "./Infobar";

export default function InfoContainer({
  className,
  title,
  info,
}: {
  className?: string;
  title: string;
  info: Array<infoBarType>;
}) {
  const barItems = info.map((item) => {
    return (
      <Infobar className="md:pb-1" key={item.name} barValue={item}></Infobar>
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
