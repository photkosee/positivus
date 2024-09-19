import teamMembers from "../../data/teamMembers";
import TeamMemberCard from "../cards/TeamMemberCard";

const TeamSection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 px-7">
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center">
        <h3
          className="text-center lg:text-start text-3xl font-semibold
         bg-primary px-1 rounded-md"
        >
          Team
        </h3>
        <p className="max-w-lg mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {teamMembers.map((teamMember, index) => (
          <TeamMemberCard key={index} {...teamMember} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
