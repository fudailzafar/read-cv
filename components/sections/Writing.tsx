import Link from "next/link";
import type { BlogPostMetadata } from "@/lib/blog";

export default function Writing({ posts }: { posts: BlogPostMetadata[] }) {
  return (
    <div className="mt-8 space-y-6">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`} className="block group">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-text group-hover:underline decoration-1 underline-offset-4">
              {post.title}
            </p>
            <p className="text-sm text-[#999]">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
