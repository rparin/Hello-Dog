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
        "h-dvh rounded-[30px] rounded-b-[50px] bg-border p-[10px] pb-[30px] md:rounded-[45px] md:rounded-b-[50px] md:pb-[50px]",
        styling?.outerClassName,
      )}
    >
      <div
        className={cn(
          "h-full w-full overflow-auto rounded-[20px] rounded-b-[20px] bg-innerBg md:rounded-b-[10px]",
          styling?.innerClassName,
        )}
      >
        {children}
      </div>
      <Footer className="pt-1 text-black opacity-70 md:pt-3.5" />
    </div>
  );
}
