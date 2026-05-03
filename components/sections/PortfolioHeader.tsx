import Image from "next/image";
import { siteContent } from "@/data/siteContent";

interface PortfolioHeaderProps {
  activeTab: "about" | "writing";
  setActiveTab: (tab: "about" | "writing") => void;
}

export default function PortfolioHeader({ activeTab, setActiveTab }: PortfolioHeaderProps) {
  const { header } = siteContent;

  return (
    <header className="mb-10">
      <div className="flex items-center gap-6 mb-4">
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
      </div>

      <div className="flex gap-8 border-b border-black/5">
        <button
          onClick={() => setActiveTab("about")}
          className={`pb-3 text-sm font-medium transition-all relative ${
            activeTab === "about" ? "text-text" : "text-[#999] hover:text-text"
          }`}
        >
          About
          {activeTab === "about" && (
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("writing")}
          className={`pb-3 text-sm font-medium transition-all relative ${
            activeTab === "writing" ? "text-text" : "text-[#999] hover:text-text"
          }`}
        >
          Writing
          {activeTab === "writing" && (
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text" />
          )}
        </button>
      </div>
    </header>
  );
}
