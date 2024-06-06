import { CR } from "@/constants/webInfo";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer(props: { className?: string }) {
  return (
    <div
      className={cn(
        "z-50 mx-auto flex w-full flex-col items-center gap-2 py-2",
        props.className,
      )}
    >
      <section className="flex">
        <p className="text-xs line-clamp-1 overflow-auto">{CR}</p>
        <a
          href="https://rparin.github.io"
          aria-label="External link to rparin portfolio website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-[.7rem] w-auto" />
        </a>
      </section>
    </div>
  );
}
