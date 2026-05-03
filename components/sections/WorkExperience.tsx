import Section from "@/components/ui/Section";
import { siteContent } from "@/data/siteContent";

export default function WorkExperience() {
  const { experience } = siteContent;

  return (
    <Section title="Work Experience">
      {experience.map((exp, index) => (
        <div key={index} className="mb-12 group">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-[17px] font-semibold text-text tracking-[-0.01em]">
              {exp.company}
            </h3>
            <span className="text-[14px] text-[#999] font-normal">
              {exp.period}
            </span>
          </div>
          <p className="mb-3 text-[15px] text-[#666] leading-normal">
            {exp.role}
          </p>
          <p className="text-[15px] text-[#666] leading-normal max-w-[560px]">
            {exp.description}
          </p>
        </div>
      ))}
    </Section>
  );
}
