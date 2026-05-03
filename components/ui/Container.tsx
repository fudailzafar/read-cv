export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12 md:py-24">
      {children}
    </div>
  );
}
