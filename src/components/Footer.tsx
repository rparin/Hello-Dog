import cn from "@/utils/cn";
import { CR } from "@/constants/webInfo";
import { ExternalLink } from "lucide-react";

export default function Footer(props: { className?: string }) {
  return (
    <footer
      className={cn(
        "z-50 mx-auto flex w-full items-center justify-center gap-0.5",
        props.className
      )}>
      <p className="line-clamp-1 overflow-auto text-sm">{CR}</p>
      <a
        href="https://github.com/rparin/Hello-Dog/tree/SpringBoot"
        aria-label="Github Source Code"
        target="_blank"
        rel="noopener noreferrer">
        <ExternalLink className="mb-2 h-[.7rem] w-auto" />
      </a>
    </footer>
  );
}
