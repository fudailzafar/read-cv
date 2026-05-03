import { siteContent } from "@/data/siteContent";

export default function WorkExperience() {
  const { experience } = siteContent;

  return (
    <div className="mt-10 space-y-9">
      <h3 className="text-[15px] font-medium text-text tracking-[-0.01em]">Work Experience</h3>

      <div className="space-y-9">
        {experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-4">
            <span className="text-sm text-[#8A8A8A] tracking-[0.02em] font-normal">
              {exp.period}
            </span>
            <div>
              <div className="flex items-baseline gap-1">
                <p className="text-base font-medium text-text leading-[1.4]">
                  {exp.role} at {exp.company}
                </p>
                <span className="text-[10px] text-[#999]">↗</span>
              </div>
              <p className="text-sm text-[#7A7A7A] mt-1">
                San Francisco, CA
              </p>
              <p className="text-sm text-[#6A6A6A] leading-[1.65] mt-3 max-w-[560px]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
