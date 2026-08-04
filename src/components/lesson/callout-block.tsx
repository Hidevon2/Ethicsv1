import type { ReactNode } from "react";
import { SparkIcon, EyeIcon, ListCheckIcon, BoltIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type CalloutVariant = "think" | "experience" | "assess" | "challenge";

const VARIANTS: Record<
  CalloutVariant,
  { label: string; icon: ReactNode; tagClass: string }
> = {
  think: {
    label: "Think",
    icon: <SparkIcon className="h-3.5 w-3.5" />,
    tagClass: "bg-primary text-primary-contrast",
  },
  experience: {
    label: "Experience",
    icon: <EyeIcon className="h-3.5 w-3.5" />,
    tagClass: "bg-accent text-primary-contrast",
  },
  assess: {
    label: "Assess",
    icon: <ListCheckIcon className="h-3.5 w-3.5" />,
    tagClass: "bg-foreground text-background",
  },
  challenge: {
    label: "Challenge",
    icon: <BoltIcon className="h-3.5 w-3.5" />,
    tagClass: "bg-primary text-primary-contrast",
  },
};

export function CalloutBlock({
  variant,
  title,
  children,
  className,
}: {
  variant: CalloutVariant;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const config = VARIANTS[variant];
  return (
    <section
      className={cn(
        "overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]",
        className,
      )}
    >
      <header className="flex items-center gap-2 border-b-2 border-foreground bg-panel-muted px-4 py-2.5">
        <span className={cn("flex h-6 w-6 items-center justify-center rounded-sm border-2 border-foreground", config.tagClass)}>
          {config.icon}
        </span>
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-foreground">
          {title}
        </h3>
        <span className="ml-auto hidden font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:block">
          {config.label}
        </span>
      </header>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}
