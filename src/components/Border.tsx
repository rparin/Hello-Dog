import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function Border({
  children,
  styling,
}: {
  children?: React.ReactElement | React.ReactElement[];
  styling?: {
    outerClassName?: string;
    innerClassName?: string;
  };
}) {
  return (
    <div
      className={cn(
        "h-dvh rounded-[45px] rounded-b-[50px] bg-border p-[25px] pb-[50px]",
        styling?.outerClassName,
      )}
    >
      <div
        className={cn(
          "h-full w-full overflow-auto rounded-[20px] rounded-b-[10px] bg-innerBg",
          styling?.innerClassName,
        )}
      >
        {children}
      </div>
      <Footer className="pt-3.5 text-black opacity-70" />
    </div>
  );
}
