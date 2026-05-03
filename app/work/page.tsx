import Link from "next/link";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import { siteContent } from "@/data/siteContent";

export default function WorkIndex() {
  const { projects } = siteContent;

  return (
    <FadeIn>
      <header className="mb-24">
        <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-text tracking-[-0.02em]">
          Selected Work
        </h1>
        <p className="text-[17px] text-[#666] leading-[1.6]">
          A collection of projects spanning product design, design systems, and web design.
        </p>
      </header>

      <section className="mb-24">
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <h2 className="mb-2 text-[24px] font-semibold text-text tracking-[-0.01em]">
                {project.title}
              </h2>
              <p className="mb-4 text-[16px] text-[#666] leading-[1.6] max-w-[600px]">
                {project.description}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="inline-block relative text-[15px] text-text font-medium hover:opacity-60 transition-opacity duration-150"
              >
                Read case study →
                <span className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </FadeIn>
  );
}
