import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { siteContent } from "@/data/siteContent";

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = siteContent.writing.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <FadeIn>
      <Link
        href="/writing"
        className="inline-block mb-12 text-[14px] text-[#999] hover:text-text transition-colors duration-150"
      >
        ← Back to writing
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="mb-4 text-[40px] font-bold leading-[1.2] text-text tracking-[-0.02em]">
            {article.title}
          </h1>
          <div className="text-[14px] text-[#999]">
            {article.year}
          </div>
        </header>

        <div className="prose prose-neutral max-w-none text-[16px] leading-[1.7] text-[#333]">
          <p>
            {article.content}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>

      <footer className="mt-16 pt-12 border-t border-black/5">
        <Link
          href="/writing"
          className="text-[14px] text-[#666] hover:text-text transition-colors duration-150"
        >
          ← Back to all articles
        </Link>
      </footer>
    </FadeIn>
  );
}
