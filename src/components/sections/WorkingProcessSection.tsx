import workingProcesses from "../../data/workingProcesses";
import WorkingProcessCard from "../cards/WorkingProcessCard";

const WorkingProcessSection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 px-3 md:px-5">
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center">
        <h3
          className="text-center lg:text-start text-3xl font-semibold
          bg-primary px-1 rounded-md"
        >
          Our Working Process
        </h3>
        <p className="max-w-lg md:max-w-[270px] mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        {workingProcesses.map((workingProcess, index) => (
          <WorkingProcessCard key={index} {...workingProcess} />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcessSection;
