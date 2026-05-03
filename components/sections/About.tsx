import { siteContent } from "@/data/siteContent";

export default function About() {
  const { header } = siteContent;

  return (
    <div className="space-y-4 max-w-[65ch]">
      <p className="text-[#666] leading-relaxed text-[16px]">
        {header.bio}
      </p>
      
      <p className="text-sm text-[#999]">
        Note: Currently exploring subcultures and niches in software publishing.
      </p>
    </div>
  );
}
