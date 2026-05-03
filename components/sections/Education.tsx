import { siteContent } from "@/data/siteContent";

export default function Education() {
  const { education } = siteContent;

  return (
    <div className="mt-10 space-y-9">
      <h3 className="text-[15px] font-normal text-text tracking-[-0.01em]">Education</h3>

      <div className="space-y-9">
        {education.map((edu, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-4">
            <span className="text-sm text-[#8A8A8A] tracking-[0.02em] font-normal">
              {edu.period}
            </span>
            <div>
              <a
                href="#"
                className="relative inline-flex text-base font-normal text-text leading-[1.4] no-underline after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-full after:bg-current after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
              >
                {edu.degree} at {edu.institution}
              </a>
              <p className="text-sm text-[#7A7A7A] mt-1">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
