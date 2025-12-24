import type { SectionProps } from "@/types/section-props";

export function Section({ children, className }: SectionProps) {
  return <section className={`py-6 ${className}`}>{children}</section>;
}
