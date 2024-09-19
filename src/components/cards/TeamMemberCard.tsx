import { FaLinkedinIn } from "react-icons/fa";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  description,
}: TeamMemberCardProps) => {
  return (
    <div
      className="bg-white size-full rounded-[35px] relative flex flex-col
      border border-black p-7 gap-y-4 content-between max-w-[320px] mx-auto"
    >
      <div className="absolute inset-0 bg-black -z-10 -bottom-[5px] rounded-[35px]" />

      <button
        className="absolute top-6 right-7 size-7 bg-black rounded-full
        flex items-center justify-center text-primary"
      >
        <FaLinkedinIn className="size-4" />
      </button>

      <div className="flex gap-x-3 items-end">
        <img src={image} alt={name} className="size-16" loading="lazy" />

        <div className="flex flex-col text-wrap">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>

      <div className="bg-black h-[1px]" />

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default TeamMemberCard;
