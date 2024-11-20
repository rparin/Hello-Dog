import cn from "@/utils/cn";
import Footer from "@/components/Footer";

export default function Border({
  outerClassName,
  className,
  children,
}: {
  outerClassName?: string;
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}) {
  return (
    <div
      className={cn(
        "h-dvh rounded-[30px] rounded-b-[50px] bg-border p-[10px] pb-[30px] md:rounded-[45px] md:rounded-b-[50px] md:p-[25px] md:pb-[50px]",
        outerClassName
      )}>
      <main
        className={cn(
          "h-full w-full overflow-auto rounded-[20px] rounded-b-[20px] bg-innerBg md:rounded-b-[10px]",
          className
        )}>
        {children}
      </main>
      <Footer className="pt-1 text-black opacity-70 md:pt-3.5" />
    </div>
  );
}
