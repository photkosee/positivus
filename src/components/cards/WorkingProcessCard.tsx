import { useState } from "react";

interface WorkingProcessCardProps {
  index: string;
  title: string;
  description: string;
}

const WorkingProcessCard = ({
  index,
  title,
  description,
}: WorkingProcessCardProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <button
      className={`text-black rounded-[45px] w-full relative
      border border-black px-7 py-5 md:p-9 select-none ${
        open ? "bg-primary" : "bg-secondary"
      } transition-all duration-300 ease-in-out`}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
      }}
      aria-expanded={open}
      aria-controls="description"
    >
      <div>
        <div className="absolute inset-0 bg-black -z-10 -bottom-[5px] rounded-[45px]" />
        <div className="flex justify-between items-center gap-x-5">
          <div className="flex items-center gap-x-5 text-start">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {index}
            </p>
            <p className="sm:text-lg md:text-xl font-semibold">{title}</p>
          </div>
          <div
            className="size-7 sm:size-10 md:size-12 rounded-full border border-black bg-secondary
           text-center text-5xl font-extrabold shrink-0 flex items-center justify-center"
          >
            <svg
              className="shrink-0"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="18"
                height="5"
                rx="1"
                className={`transform origin-center ${
                  open && "!rotate-180"
                } transition duration-200 ease-out`}
              />
              <rect
                y="6"
                width="18"
                height="5"
                rx="1"
                className={`transform origin-center rotate-90 ${
                  open && "!rotate-180"
                } transition duration-200 ease-out`}
              />
            </svg>
          </div>
        </div>

        <div
          id="description"
          role="region"
          className={`text-sm md:text-base grid overflow-hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-y-5 pt-7">
              <div className="h-[1px] bg-black" />
              <p className="text-start">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default WorkingProcessCard;
