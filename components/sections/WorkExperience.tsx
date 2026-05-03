import { siteContent } from "@/data/siteContent";

export default function WorkExperience() {
  const { experience } = siteContent;

  return (
    <div className="mt-10 space-y-9">
      <h3 className="text-[15px] font-normal text-text tracking-[-0.01em]">Work Experience</h3>

      <div className="space-y-9">
        {experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-4">
            <span className="text-sm text-[#8A8A8A] tracking-[0.02em] font-normal">
              {exp.period}
            </span>
            <div>
              <div>
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-1 text-base font-normal text-text leading-[1.4] no-underline after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-full after:bg-current after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
                >
                  {exp.role} at {exp.company}
                  <span className="text-[10px] text-text opacity-60 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                </a>
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
