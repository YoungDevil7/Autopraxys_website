import { cn } from "@/lib/utils";

const LOGO_SRC = "/autopraxys-logo.png?v=5";

export function Wordmark({ className }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="AutoPraxys"
      className={cn(
        "h-10 w-auto object-contain mix-blend-multiply dark:mix-blend-normal",
        className,
      )}
    />
  );
}
