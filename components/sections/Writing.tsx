import Link from "next/link";
import type { BlogPostMetadata } from "@/lib/blog";

export default function Writing({ posts }: { posts: BlogPostMetadata[] }) {
  return (
    <div className="mt-10 space-y-9">
      <h3 className="text-[15px] font-normal text-text tracking-[-0.01em]">Writing</h3>

      <div className="space-y-7">
        {posts.map((post, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-4">
            <span className="text-sm text-[#8A8A8A] tracking-[0.02em] font-normal">
              {new Date(post.date).getFullYear()}
            </span>
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="group inline-flex items-center gap-1.5 text-base font-normal text-text leading-[1.4]"
              >
                {post.title}
                <span className="text-[10px] text-[#999] opacity-60 group-hover:opacity-100 transition-opacity duration-150">
                  ↗
                </span>
              </Link>
              {post.description && (
                <p className="text-sm text-[#6B6B6B] mt-1 max-w-[520px]">
                  {post.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
