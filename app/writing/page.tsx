import Link from "next/link";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import { siteContent } from "@/data/siteContent";

export default function WritingIndex() {
  const { writing } = siteContent;

  return (
    <FadeIn>
      <header className="mb-24">
        <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-text tracking-[-0.02em]">
          Writing
        </h1>
        <p className="text-[17px] text-[#666] leading-[1.6]">
          Thoughts on design, technology, and building products.
        </p>
      </header>

      <section className="mb-24">
        <div className="flex flex-col">
          {writing.map((article, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-baseline py-6 border-b border-black/5 group last:border-0">
              <div className="mb-2 md:mb-0">
                <Link
                  href={`/writing/${article.slug}`}
                  className="text-[17px] font-medium text-text group-hover:text-muted transition-colors duration-150"
                >
                  {article.title}
                </Link>
                <p className="mt-2 text-[15px] text-[#666] line-clamp-2 max-w-[500px]">
                  {article.content}
                </p>
              </div>
              <span className="text-[14px] text-[#999] font-normal">
                {article.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </FadeIn>
  );
}
