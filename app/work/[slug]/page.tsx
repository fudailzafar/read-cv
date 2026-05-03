import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { siteContent } from "@/data/siteContent";

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = siteContent.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <FadeIn>
      <Link
        href="/work"
        className="inline-block mb-12 text-[14px] text-[#999] hover:text-text transition-colors duration-150"
      >
        ← Back to work
      </Link>

      <article>
        <header className="mb-16">
          <h1 className="mb-3 text-[40px] font-bold leading-[1.2] text-text tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="mb-6 text-[17px] text-[#666] leading-[1.6]">
            {project.subtitle}
          </p>
          <div className="flex gap-6 text-[14px]">
            <div>
              <span className="text-[#999]">Year:</span>{" "}
              <span className="text-[#666]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#999]">Role:</span>{" "}
              <span className="text-[#666]">{project.role}</span>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-4 text-[11px] font-semibold text-[#999] uppercase tracking-[0.08em]">
            Overview
          </h2>
          <p className="text-[16px] text-[#333] leading-[1.7] max-w-[65ch]">
            {project.overview}
          </p>
        </section>

        {/* Metrics */}
        {project.metrics && (
          <section className="mb-16 pb-16 border-b border-black/5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-[28px] font-semibold text-text mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[13px] text-[#999]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Case study sections */}
        {project.sections?.map((section, index) => (
          <section key={index} className="mb-16">
            <h2 className="mb-6 text-[24px] font-semibold text-text tracking-[-0.01em]">
              {section.heading}
            </h2>
            <p className="text-[16px] text-[#333] leading-[1.7] max-w-[65ch]">
              {section.content}
            </p>
          </section>
        ))}
      </article>

      <footer className="mt-16 pt-12 border-t border-black/5">
        <Link
          href="/work"
          className="text-[14px] text-[#666] hover:text-text transition-colors duration-150"
        >
          ← Back to all projects
        </Link>
      </footer>
    </FadeIn>
  );
}
