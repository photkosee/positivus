import { useEffect, useState } from "react";

const Header = () => {
  const [top, setTop] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollYPosition = () =>
      window.scrollY > 0 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile nav is open
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header
      className={`${
        top && "bg-white shadow-lg"
      } sticky p-7 top-0 z-30 transition-all`}
    >
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex gap-x-2 items-center">
          <svg
            className="size-4 sm:size-5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
              fill="black"
            />
          </svg>
          <p className="font-bold text-xl sm:text-2xl">Positivus</p>
        </div>

        <nav className="gap-x-5 xl:gap-x-7 hidden md:flex text-sm lg:text-base items-center">
          <button>About us</button>
          <button>Services</button>
          <button>Use Cases</button>
          <button>Pricing</button>
          <button>Blog</button>
          <button className="border border-black rounded-xl py-3 px-5 bg-white">
            Request a quote
          </button>
        </nav>

        <button
          className="grid md:hidden justify-items-center gap-y-1.5 p-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-7 bg-black transition-all ${
              open && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-black transition-all ${
              open && "scale-0"
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-black transition-all ${
              open && "-rotate-45 -translate-y-2.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 w-[calc(100%)] h-screen md:hidden bg-white/95 ${
          open ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all duration-300 z-40 flex items-center justify-center p-5`}
      >
        <nav className="flex flex-col gap-y-5 items-center justify-center">
          <button>About us</button>
          <button>Services</button>
          <button>Use Cases</button>
          <button>Pricing</button>
          <button>Blog</button>
          <button className="border border-black rounded-xl py-3 px-5 bg-white">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
