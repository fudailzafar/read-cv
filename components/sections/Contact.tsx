import { siteContent } from "@/data/siteContent";

export default function Contact() {
  const { contact } = siteContent;

  return (
    <section className="pt-12 border-t border-black/5">
      <h2 className="mb-8 text-[11px] font-semibold text-muted uppercase tracking-[0.08em]">
        Get in Touch
      </h2>
      <a
        href={`mailto:${contact.email}`}
        className="inline-block mb-8 relative text-[17px] text-text font-medium hover:opacity-60 transition-opacity duration-150"
      >
        {contact.email}
        <span className="underline-hover absolute bottom-0 left-0 w-full h-px bg-current" />
      </a>
      <div className="flex gap-8">
        {contact.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="text-[14px] text-[#666] hover:text-text transition-colors duration-150"
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
}
