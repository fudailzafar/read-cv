import { siteContent } from "@/data/siteContent";

export default function SideProjects() {
  const { sideProjects } = siteContent;

  return (
    <div className="mt-10 space-y-9">
      <h3 className="text-[15px] font-normal text-text tracking-[-0.01em]">Side Projects</h3>

      <div className="space-y-7">
        {sideProjects.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-4">
            <span className="text-sm text-[#8A8A8A] tracking-[0.02em] font-normal">
              {item.year}
            </span>
            <a
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-base font-normal text-text leading-[1.4] hover:opacity-70 transition-opacity duration-150"
            >
              {item.title}
              <span className="text-[10px] text-[#999] opacity-60 group-hover:opacity-100 transition-opacity duration-150">
                ↗
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
