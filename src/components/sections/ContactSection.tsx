import { useState } from "react";

const ContactSection = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 px-7 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center">
        <h3
          className="text-center lg:text-start text-3xl font-semibold
          bg-primary px-1 rounded-md"
        >
          Contact Us
        </h3>
        <p className="max-w-lg md:max-w-[270px] mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div
        className="mx-auto bg-secondary py-9 px-10 md:px-14 flex items-center justify-center
        lg:justify-between gap-x-5 rounded-main w-full max-w-lg lg:max-w-5xl relative select-none"
      >
        <div className="max-w-sm w-full flex flex-col gap-y-7">
          <div className="flex gap-x-10 justify-between lg:justify-start px-5 lg:px-0">
            <div className="flex items-center gap-x-2 text-sm">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="0"
              >
                <input
                  name="radio"
                  type="radio"
                  className="peer size-6 cursor-pointer appearance-none rounded-full
                  bg-white border border-black"
                  id="0"
                  checked={value === 0}
                  onChange={() => setValue(0)}
                />
                <span
                  className="absolute bg-primary size-3 rounded-full opacity-0 peer-checked:opacity-100
                  transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </label>
              <label className="cursor-pointer" htmlFor="0">
                Say Hi
              </label>
            </div>

            <div className="flex items-center gap-x-2 text-sm">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="1"
              >
                <input
                  name="radio"
                  type="radio"
                  className="peer size-6 cursor-pointer appearance-none rounded-full
                  bg-white border border-black"
                  id="1"
                  checked={value === 1}
                  onChange={() => setValue(1)}
                />
                <span
                  className="absolute bg-primary size-3 rounded-full opacity-0 peer-checked:opacity-100
                  transition-opacity duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </label>
              <label className="cursor-pointer" htmlFor="1">
                Get a Quote
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border border-black w-full rounded-lg py-2 px-5"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-sm">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-black w-full rounded-lg py-2 px-5"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="message" className="text-sm">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="border border-black w-full rounded-lg py-2 px-5 min-h-28"
              />
            </div>
          </div>

          <button className="bg-black text-white py-3 px-7 rounded-xl w-full">
            Send Message
          </button>
        </div>

        <img
          src="/contact.svg"
          alt="Hero Image"
          className="h-[calc(94%)] hidden lg:block absolute -right-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default ContactSection;
