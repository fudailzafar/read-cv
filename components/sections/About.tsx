import { siteContent } from "@/data/siteContent";

export default function About() {
  const { header } = siteContent;

  return (
    <div className="mt-10">
      <h3 className="text-[15px] font-normal text-text mb-3">About</h3>
      <p className="text-[15px] text-[#5F5F5F] leading-[1.65] max-w-[620px]">
        {header.bio}
      </p>
    </div>
  );
}
