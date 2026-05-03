import { siteContent } from "@/data/siteContent";

export default function Contact() {
  const { contact } = siteContent;

  return (
    <section className="mt-16 pt-12 border-t border-black/5">
      <h2 className="mb-6 text-[15px] font-medium text-text">
        Contact
      </h2>
      
      <div className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-y-5 items-center">
        {contact.map((item, index) => (
          <div key={index} className="contents">
            <span className="text-sm text-[#6B6B6B]">
              {item.label}
            </span>
            <a 
              href={item.href} 
              className="flex items-center gap-1 text-sm text-text hover:underline underline-offset-4 decoration-1 decoration-black/20 transition-all w-fit"
            >
              {item.value}
              <span className="text-[10px] text-[#999] translate-y-[0.5px]">↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
