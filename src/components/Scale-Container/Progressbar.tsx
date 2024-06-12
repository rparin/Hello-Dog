import { cn } from "@/lib/utils";
import { DogInfoScale } from "@/lib/schema/DogInfoScale";

export default function Progressbar({
  className,
  barValue,
}: {
  className?: string;
  barValue: DogInfoScale;
}) {
  const scale = {
    0: "w-0",
    1: "w-1/5 bg-[#F03F4B]",
    2: "w-2/5 bg-[#f66e1c]",
    3: "w-3/5 bg-[#E59E24]",
    4: "w-4/5 bg-[#9ACA3C]",
    5: "w-full bg-[#55B949]",
  };
  return (
    <div className={cn("flex h-full w-full flex-col", className)}>
      <p className="ml-1.5 mr-1.5 border-b border-solid border-black text-xs leading-none md:text-base">
        {barValue.name}
      </p>
      <div className="mx-1 mt-0.5 h-full rounded-3xl bg-white md:mx-0.5">
        <div
          className={cn(
            "h-full rounded-3xl",
            scale[barValue.value as keyof typeof scale],
          )}
        ></div>
      </div>
    </div>
  );
}
