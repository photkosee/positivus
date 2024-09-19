import "@fontsource-variable/space-grotesk";

import HeroSection from "./components/sections/HeroSection";
import ServiceSection from "./components/sections/ServiceSection";
import CaseStudySection from "./components/sections/CaseStudySection";
import WorkingProcessSection from "./components/sections/WorkingProcessSection";
import TeamSection from "./components/sections/TeamSection";
import TestimonialSection from "./components/sections/TestimonialSection";

function App() {
  return (
    <>
      <main className="py-28">
        <HeroSection />
        <ServiceSection />
        <CaseStudySection />
        <WorkingProcessSection />
        <TeamSection />
        <TestimonialSection />
      </main>
    </>
  );
}

export default App;
