import PortfolioHeader from "@/components/sections/PortfolioHeader";
import WorkExperience from "@/components/sections/WorkExperience";
import Projects from "@/components/sections/Projects";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <FadeIn>
      <PortfolioHeader />
      <WorkExperience />
      <Projects />
      <Writing />
      <Contact />
    </FadeIn>
  );
}
