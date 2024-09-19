import { LuArrowUpRight } from "react-icons/lu";

interface ServiceCardProps {
  title1: string;
  title2: string;
  image: string;
  alt: string;
  theme: "primary" | "secondary" | "tertiary";
}

const ServiceCard = ({
  title1,
  title2,
  image,
  alt,
  theme,
}: ServiceCardProps) => {
  const duoTheme =
    (theme === "secondary" && "primary") ||
    (theme === "tertiary" && "white") ||
    (theme === "primary" && "white");

  return (
    <div
      className={`py-8 px-9 rounded-[45px] max-w-md w-full mx-auto relative
      border border-black h-56 grid grid-cols-2 grid-rows-3 bg-${theme}`}
    >
      <div className="flex flex-col col-span-2 sm:col-span-1">
        <h5 className="text-xl font-semibold inline-block">
          <span className={`bg-${duoTheme} px-1 rounded-md`}>{title1}</span>
        </h5>
        <h5 className="text-xl leading-none font-semibold inline-block">
          <span className={`bg-${duoTheme} px-1 rounded-md`}>{title2}</span>
        </h5>
      </div>

      <div
        className="row-span-2 sm:row-span-3 order-3 sm:order-1
        flex items-center justify-center"
      >
        <img src={image} alt={alt} className="h-full" />
      </div>

      <div className="row-span-2 relative sm:order-3">
        <button className="absolute left-0 bottom-0 flex items-center gap-x-2">
          <div
            className={`rounded-full size-8 flex items-center justify-center p-1 ${
              theme === "tertiary"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            <LuArrowUpRight className="size-full rotate-12" />
          </div>
          <p
            className={`hidden sm:block ${
              theme === "tertiary" ? "text-white" : "text-black"
            }`}
          >
            Learn more
          </p>
        </button>
      </div>

      <div className="absolute inset-0 bg-black -z-10 -bottom-[5px] rounded-[45px]" />
    </div>
  );
};

export default ServiceCard;
