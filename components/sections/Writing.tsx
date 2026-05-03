import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteContent } from "@/data/siteContent";

export default function Writing() {
  const { writing } = siteContent;

  return (
    <Section title="Writing">
      {writing.map((article, index) => (
        <div key={index} className="flex justify-between items-baseline mb-5 group py-1">
          <Link
            href={`/writing/${article.slug}`}
            className="relative inline-block text-[15px] text-text hover:opacity-60 transition-opacity duration-150"
          >
            {article.title}
            <span className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current" />
          </Link>
          <span className="text-[14px] text-[#999] font-normal">
            {article.year}
          </span>
        </div>
      ))}
    </Section>
  );
}
