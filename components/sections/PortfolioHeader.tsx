import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function PortfolioHeader() {
  const { header } = siteContent;

  return (
    <header className="mb-10 flex items-center gap-6">
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={header.avatar || "/profile-avatar.png"}
          alt={header.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <h1 className="text-2xl font-normal text-text leading-[1.2]">
          {header.name}
        </h1>
        <p className="text-base text-[#6B6B6B] mt-1">
          {header.role}
        </p>
        {header.website && (
          <span className="inline-block text-sm text-[#6B6B6B] bg-[#F1F1F1] rounded-full px-3 py-1.5 mt-2">
            {header.website}
          </span>
        )}
      </div>
    </header>
  );
}
