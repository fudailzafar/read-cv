import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { getSortedPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog - Alex Morgan",
  description: "Writing and thoughts on design and development.",
};

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <FadeIn>
      <header className="mb-24">
        <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-text tracking-[-0.02em]">
          Blog
        </h1>
        <p className="text-[17px] text-[#666] leading-[1.6]">
          Thoughts on design, technology, and building products.
        </p>
      </header>

      <section className="mb-24">
        <div className="flex flex-col">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-baseline py-6 border-b border-black/5 group last:border-0">
              <div className="mb-2 md:mb-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[17px] font-medium text-text group-hover:text-muted transition-colors duration-150"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-[15px] text-[#666] line-clamp-2 max-w-[500px]">
                  {post.description}
                </p>
              </div>
              <span className="text-[14px] text-[#999] font-normal flex-shrink-0 md:ml-4">
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
