import { cn } from "@/lib/utils";

export default function Progressbar({
  className,
  title,
  value,
}: {
  className?: string;
  title: string;
  value: number;
}) {
  const scale = {
    1: "w-1/5 bg-[#F03F4B]",
    2: "w-2/5 bg-[#E54C25]",
    3: "w-3/5 bg-[#E59E24]",
    4: "w-4/5 bg-[#9ACA3C]",
    5: "w-full bg-[#55B949]",
  };
  return (
    <div className={cn("flex h-full w-full flex-col", className)}>
      <p className="ml-1.5 mr-1.5 border-b border-solid border-black text-xs leading-none md:text-base">
        {title}
      </p>
      <div className="mt-0.5 h-full w-full rounded-3xl bg-white">
        <div
          className={cn(
            "h-full rounded-3xl",
            scale[value as keyof typeof scale],
          )}
        ></div>
      </div>
    </div>
  );
}
