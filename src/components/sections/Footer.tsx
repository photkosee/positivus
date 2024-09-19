import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white text-sm">
      <div
        className="flex flex-col gap-y-9 max-w-5xl w-full mx-auto bg-tertiary
        lg:rounded-t-main pt-7 pb-10 px-5 md:px-9"
      >
        <div className="flex flex-col md:flex-row gap-x-7 items-center justify-between gap-y-5">
          <div className="flex gap-x-2 items-center">
            <svg
              className="size-4 sm:size-5"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="white"
              />
            </svg>
            <p className="font-bold text-xl sm:text-2xl">Positivus</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-7 gap-y-3">
            <button className="underline">About us</button>
            <button className="underline">Services</button>
            <button className="underline">Use Cases</button>
            <button className="underline">Pricing</button>
          </div>

          <div className="hidden md:flex gap-x-4">
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaLinkedinIn />
            </button>
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaFacebookF />
            </button>
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaTwitter />
            </button>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between
          gap-x-3 gap-y-7"
        >
          <div className="flex flex-col gap-y-3 max-w-[250px] text-center md:text-start">
            <button
              className="bg-primary text-black font-semibold rounded-md
              px-1.5 self-center md:self-start mb-5 md:my-0"
            >
              Contact us:
            </button>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>

          <div
            className="bg-[#292A32] rounded-lg flex flex-col md:flex-row
            gap-4 p-5 md:py-10 md:px-8 w-full max-w-[300px] md:max-w-[500px]"
          >
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl text-white bg-[#292A32] border border-white
              px-4 py-3.5 w-full"
            />
            <button
              className="bg-primary text-black py-3.5 px-5 rounded-xl
              font-medium w-full"
            >
              Subscribe to news
            </button>
          </div>

          <div className="flex md:hidden gap-x-4">
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaLinkedinIn />
            </button>
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaFacebookF />
            </button>
            <button
              className="size-7 p-1 bg-white text-black rounded-full
              flex items-center justify-center text-base"
            >
              <FaTwitter />
            </button>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white" />

        <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-2">
          <div className="">© 2023 Positivus. All Rights Reserved.</div>
          <button className="underline">Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
