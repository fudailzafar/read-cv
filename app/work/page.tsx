import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { getSortedWork } from "@/lib/work";

export const metadata = {
  title: "Work - Alex Morgan",
  description: "Selected projects and case studies.",
};

export default function WorkIndex() {
  const projects = getSortedWork();

  return (
    <FadeIn>
      <header className="mb-24">
        <h1 className="mb-4 text-[48px] font-bold leading-[1.1] text-text tracking-[-0.02em]">
          Work
        </h1>
        <p className="text-[17px] text-[#666] leading-[1.6]">
          Selected projects and case studies from recent years.
        </p>
      </header>

      <section className="mb-24">
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <Link href={`/work/${project.slug}`} className="block">
                {project.cover && (
                  <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-xl bg-border/50">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h2 className="text-[20px] font-semibold text-text tracking-tight group-hover:text-muted transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-[14px] text-muted">
                    {project.date}
                  </span>
                </div>
                <p className="text-[15px] text-[#666] leading-[1.6] max-w-[65ch]">
                  {project.description}
                </p>
                {project.client && (
                  <p className="text-[13px] text-muted mt-3 font-medium uppercase tracking-wider">
                    {project.client}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
