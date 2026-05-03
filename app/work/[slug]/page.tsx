import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { getWorkBySlug, getAllWorkSlugs } from "@/lib/work";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getWorkBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.metadata.title} - Alex Morgan`,
    description: project.metadata.description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      images: project.metadata.cover ? [{ url: project.metadata.cover }] : [],
    },
  };
}

export function generateStaticParams() {
  const slugs = getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function WorkProject({ params }: Props) {
  const project = await getWorkBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  return (
    <FadeIn>
      <Link
        href="/work"
        className="inline-block mb-12 text-[14px] text-[#999] hover:text-text transition-colors duration-150"
      >
        ← Back to work
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] text-text tracking-[-0.02em]">
            {metadata.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-black/5 mb-12">
            {metadata.client && (
              <div>
                <h3 className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-1">Client</h3>
                <p className="text-[15px] text-text">{metadata.client}</p>
              </div>
            )}
            {metadata.role && (
              <div>
                <h3 className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-1">Role</h3>
                <p className="text-[15px] text-text">{metadata.role}</p>
              </div>
            )}
            <div>
              <h3 className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-1">Date</h3>
              <p className="text-[15px] text-text">{metadata.date}</p>
            </div>
            {metadata.tags && (
              <div>
                <h3 className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-1">Services</h3>
                <p className="text-[15px] text-text">{metadata.tags.join(", ")}</p>
              </div>
            )}
          </div>
        </header>

        {metadata.cover && (
          <div className="relative w-full aspect-21/9 mb-16 rounded-xl overflow-hidden bg-border/50">
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
          className="prose prose-neutral max-w-[70ch] mx-auto text-[16px] leading-[1.8] text-[#333] prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-text prose-a:underline-offset-4 hover:prose-a:text-muted prose-pre:bg-[#F5F5F3] prose-pre:text-[#333] prose-pre:border prose-pre:border-[#EAEAEA] prose-code:text-[#111] prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>

      <footer className="mt-24 pt-12 border-t border-black/5 text-center">
        <Link
          href="/work"
          className="inline-block px-6 py-3 bg-text text-white rounded-full text-[14px] font-medium hover:bg-black/80 transition-colors"
        >
          View all projects
        </Link>
      </footer>
    </FadeIn>
  );
}
