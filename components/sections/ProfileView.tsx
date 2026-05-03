import PortfolioHeader from "@/components/sections/PortfolioHeader";
import About from "@/components/sections/About";
import WorkExperience from "@/components/sections/WorkExperience";
import Education from "@/components/sections/Education";
import Speaking from "@/components/sections/Speaking";
import SideProjects from "@/components/sections/SideProjects";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import type { BlogPostMetadata } from "@/lib/blog";

export default function ProfileView({ posts }: { posts: BlogPostMetadata[] }) {
  return (
    <div className="max-w-[720px] mx-auto pb-24">
      <PortfolioHeader />
      <About />
      <WorkExperience />
      <Speaking />
      <SideProjects />
      <Education />
      <Writing posts={posts} />
      <Contact />
    </div>
  );
}
