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
      <Infobar
        className="overflow-auto md:mb-1"
        key={item.name}
        barValue={item}
      ></Infobar>
    );
  });

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-accent text-black",
        className,
      )}
    >
      <h1 className="text-sm leading-none md:mb-0.5 md:text-xl">{title}</h1>
      {barItems}
    </div>
  );
}
