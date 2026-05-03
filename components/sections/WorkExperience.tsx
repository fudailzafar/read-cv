import { siteContent } from "@/data/siteContent";

export default function WorkExperience() {
  const { experience } = siteContent;

  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-sm font-medium text-text">Work Experience</h3>
      
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-4">
            <span className="text-[14px] text-[#999] tabular-nums">
              {exp.period}
            </span>
            <div>
              <p className="text-[15px] font-medium text-text">
                {exp.role} at {exp.company}
              </p>
              <p className="text-[14px] text-[#999] mt-0.5">
                San Francisco, CA
              </p>
              <p className="text-[15px] text-[#666] leading-relaxed mt-3 max-w-[560px]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
