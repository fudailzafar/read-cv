import Link from "next/link";
import Section from "@/components/ui/Section";
import { getSortedWork } from "@/lib/work";

export default function Projects() {
  const projects = getSortedWork();

  return (
    <Section title="Selected Projects">
      {projects.map((project, index) => (
        <div key={index} className="mb-10 group">
          <h3 className="mb-2 text-[17px] font-semibold text-text tracking-[-0.01em]">
            {project.title}
          </h3>
          <p className="mb-3 text-[15px] text-[#666] leading-[1.65] max-w-[560px]">
            {project.description}
          </p>
          <Link
            href={`/work/${project.slug}`}
            className="inline-block relative text-[14px] text-text hover:opacity-60 transition-opacity duration-150"
          >
            View project →
            <span className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current" />
          </Link>
        </div>
      ))}
    </Section>
  );
}
