import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function PortfolioHeader() {
  const { header } = siteContent;

  return (
    <header className="mb-12 flex items-center gap-5">
      <div className="relative size-24 shrink-0 rounded-full overflow-hidden">
        <Image
          src={header.avatar || "/profile-avatar.png"}
          alt={header.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[26px] font-normal text-text leading-[1.2]">
          {header.name}
        </h1>
        <p className="text-[15px] text-[#6B6B6B] mt-1 leading-snug">
          {header.role}
        </p>
        {header.website && (
          <span className="inline-block self-start text-sm text-[#7A7A7A] bg-[#F3F3F3] rounded-full px-3 py-1 mt-2">
            {header.website}
          </span>
        )}
      </div>
    </header>
  );
}
