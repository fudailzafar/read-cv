import Link from "next/link";
import Section from "@/components/ui/Section";
import { getSortedPosts } from "@/lib/blog";

export default function Writing() {
  const posts = getSortedPosts();

  return (
    <Section title="Writing">
      {posts.map((post, index) => (
        <div key={index} className="flex justify-between items-baseline mb-5 group py-1">
          <Link
            href={`/blog/${post.slug}`}
            className="relative inline-block text-[15px] text-text hover:opacity-60 transition-opacity duration-150"
          >
            {post.title}
            <span className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current" />
          </Link>
          <span className="text-[14px] text-[#999] font-normal">
            {post.date}
          </span>
        </div>
      ))}
    </Section>
  );
}
