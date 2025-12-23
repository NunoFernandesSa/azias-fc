export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container mx-auto px-6 py-4 ${className}`}>
      {children}
    </section>
  );
}
