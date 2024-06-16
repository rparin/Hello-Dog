import { CR } from "@/constants/webInfo";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer(props: { className?: string }) {
  return (
    <section
      className={cn(
        "z-50 mx-auto flex w-full items-center justify-center gap-0.5",
        props.className,
      )}
    >
      <p className="line-clamp-1 overflow-auto text-sm">{CR}</p>
      <a
        href="https://github.com/rparin/Hello-Dog"
        aria-label="External link to github source code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="mb-2 h-[.7rem] w-auto" />
      </a>
    </section>
  );
}
