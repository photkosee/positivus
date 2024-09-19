import caseStudies from "../../data/caseStudies";
import CaseStudyCarousel from "../CaseStudyCarousel";

const CaseStudySection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 md:px-7">
      <div
        className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center
        px-7 md:px-0"
      >
        <h3
          className="text-center lg:text-start text-3xl font-semibold
          bg-primary px-1 rounded-md"
        >
          Case Studies
        </h3>
        <p className="max-w-lg mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="md:py-14 md:px-7 relative">
        <div
          className="absolute left-0 top-0 hidden md:grid grid-cols-3
          divide-x-2 divide-white size-full -z-10 py-14 bg-tertiary rounded-main"
        >
          <div />
          <div />
          <div />
        </div>

        <CaseStudyCarousel caseStudies={caseStudies} />
      </div>
    </section>
  );
};

export default CaseStudySection;
