import "@fontsource-variable/space-grotesk";

import HeroSection from "./components/sections/HeroSection";
import ServiceSection from "./components/sections/ServiceSection";
import CaseStudySection from "./components/sections/CaseStudySection";

function App() {
  return (
    <>
      <main className="py-28">
        <HeroSection />
        <ServiceSection />
        <CaseStudySection />
      </main>
    </>
  );
}

export default App;
