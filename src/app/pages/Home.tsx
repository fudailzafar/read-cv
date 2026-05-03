import PortfolioHeader from '../components/PortfolioHeader';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Writing from '../components/Writing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <PortfolioHeader />
      <WorkExperience />
      <Projects />
      <Writing />
      <Contact />
    </>
  );
}
