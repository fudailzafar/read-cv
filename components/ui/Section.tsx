export default function Section({ 
  children, 
  title, 
  className = "" 
}: { 
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <section className={`mb-24 ${className}`}>
      {title && (
        <h2 className="mb-8 text-[11px] font-semibold text-muted uppercase tracking-[0.08em]">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
