import type { ReactNode } from "react";
import { Stethoscope, GraduationCap, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  clinical: {
    label: "Clinical Note",
    icon: Stethoscope,
    classes: "border-burgundy/40 bg-burgundy/[0.06]",
  },
  educational: {
    label: "Educational Note",
    icon: GraduationCap,
    classes: "border-accent/40 bg-accent-soft",
  },
  note: {
    label: "Note",
    icon: Info,
    classes: "border-slateblue/40 bg-slateblue/[0.06]",
  },
} as const;

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: keyof typeof VARIANTS;
  title?: string;
  children: ReactNode;
}) {
  const variant = VARIANTS[type];
  const Icon = variant.icon;
  return (
    <aside className={cn("not-prose my-8 rounded-sm border-l-4 p-5", variant.classes)}>
      <p className="mb-2 flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {title ?? variant.label}
      </p>
      <div className="font-sans text-[15px] leading-relaxed text-ink [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
