import type { ReactNode } from "react";
import { SparkIcon, EyeIcon, ListCheckIcon, BoltIcon, PenIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type CalloutVariant = "think" | "experience" | "assess" | "challenge" | "note";

const VARIANTS: Record<
  CalloutVariant,
  { label: string; icon: ReactNode; tagClass: string }
> = {
  think: {
    label: "Think",
    icon: <SparkIcon className="h-3.5 w-3.5" />,
    tagClass: "text-primary",
  },
  experience: {
    label: "Experience",
    icon: <EyeIcon className="h-3.5 w-3.5" />,
    tagClass: "text-primary",
  },
  assess: {
    label: "Assess",
    icon: <ListCheckIcon className="h-3.5 w-3.5" />,
    tagClass: "text-primary",
  },
  challenge: {
    label: "Challenge",
    icon: <BoltIcon className="h-3.5 w-3.5" />,
    tagClass: "text-primary",
  },
  note: {
    label: "Note",
    icon: <PenIcon className="h-3.5 w-3.5" />,
    tagClass: "text-primary",
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
        "overflow-hidden rounded-[var(--radius)] border border-border bg-panel",
        className,
      )}
    >
      <header className="flex items-center gap-2.5 border-b border-border bg-panel-muted px-4 py-2.5">
        <span className={cn("flex h-6 w-6 items-center justify-center rounded-sm border border-border bg-primary/10", config.tagClass)}>
          {config.icon}
        </span>
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          {title}
        </h3>
        <span className="ml-auto hidden font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:block">
          {config.label}
        </span>
      </header>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}