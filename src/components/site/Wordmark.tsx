import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <img
      src="/autopraxys-logo.png"
      alt="AutoPraxys"
      className={cn("h-11 w-auto object-contain", className)}
    />
  );
}
