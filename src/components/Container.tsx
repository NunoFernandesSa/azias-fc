export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`container mx-auto px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 ${className}`}
    >
      {children}
    </section>
  );
}
