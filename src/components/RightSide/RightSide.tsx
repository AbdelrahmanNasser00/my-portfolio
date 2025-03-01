import AboutSection from "./About/AboutSection";
import ContactSection from "./Contact/ContactSection";
import ContactUsDesignIdea from "./Contact/ContactUsDesignIdea";
import ProjectsSection from "./Projects/ProjectsSection";
import SkillsSection from "./Skills/SkillsSection";
import TimelineSection from "./Timeline/TimelineSection";

const RightSide = () => {
  return (
    <main className=" pt-24 lg:w-1/2 w-full">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      {/* <ContactSection />
      <ContactUsDesignIdea /> */}
    </main>
  );
};

export default RightSide;
