import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad-mobile)] md:px-[var(--container-pad-desktop)]",
        className
      )}
    >
      {children}
    </div>
  );
}

