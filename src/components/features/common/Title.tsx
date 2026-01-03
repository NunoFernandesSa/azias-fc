import type { TitleProps } from "@/types/title-props";

export function Title({ children, className }: TitleProps) {
  return (
    <div className={`text-2xl md:text-4xl xl:text-6xl font-bold ${className}`}>
      {children}
    </div>
  );
}
