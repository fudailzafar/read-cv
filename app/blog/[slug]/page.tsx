import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.metadata.title} - Alex Morgan`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: post.metadata.cover ? [{ url: post.metadata.cover }] : [],
    },
  };
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <FadeIn>
      <Link
        href="/blog"
        className="inline-block mb-12 text-[14px] text-[#999] hover:text-text transition-colors duration-150"
      >
        ← Back to blog
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="mb-4 text-[40px] font-bold leading-[1.2] text-text tracking-[-0.02em]">
            {metadata.title}
          </h1>
          <div className="flex gap-4 text-[14px] text-[#999]">
            <span>{metadata.date}</span>
            {metadata.tags && (
              <>
                <span>·</span>
                <span>{metadata.tags.join(", ")}</span>
              </>
            )}
          </div>
        </header>

        {metadata.cover && (
          <div className="relative w-full h-[300px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={metadata.cover}
              alt={metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div 
          className="prose prose-neutral max-w-[65ch] text-[16px] leading-[1.7] text-[#333] prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-text prose-a:underline-offset-4 hover:prose-a:text-muted prose-pre:bg-[#F5F5F3] prose-pre:text-[#333] prose-pre:border prose-pre:border-[#EAEAEA] prose-code:text-[#111]"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>

      <footer className="mt-16 pt-12 border-t border-black/5">
        <Link
          href="/blog"
          className="text-[14px] text-[#666] hover:text-text transition-colors duration-150"
        >
          ← Back to all posts
        </Link>
      </footer>
    </FadeIn>
  );
}
