import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function PortfolioHeader() {
  const { header } = siteContent;

  return (
    <header className="mb-12 flex items-center gap-6">
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full border border-black/5 shadow-sm">
        <Image
          src={header.avatar || "/profile-avatar.png"}
          alt={header.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <h1 className="text-[24px] font-bold text-text leading-tight tracking-tight">
          {header.name}
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          {header.role}
        </p>
        {header.website && (
          <p className="text-[14px] text-[#999] leading-relaxed mt-0.5">
            {header.website}
          </p>
        )}
      </div>
    </header>
  );
}
