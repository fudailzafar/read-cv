import { siteContent } from "@/data/siteContent";

export default function PortfolioHeader() {
  const { header } = siteContent;

  return (
    <header className="mb-24">
      <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-text tracking-[-0.02em]">
        {header.name}
      </h1>
      <p className="mb-3 text-[17px] text-text leading-[1.6] font-normal">
        {header.role}
      </p>
      <p className="text-[15px] text-muted leading-[1.6]">
        {header.location}
      </p>
    </header>
  );
}
