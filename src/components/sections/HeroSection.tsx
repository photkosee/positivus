import LogoInfiniteScroll from "../LogoInfiniteScroll";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-20 overflow-hidden">
      <div
        className="grid grid-cols-1 md:grid-cols-2
        gap-x-7 gap-y-5 px-7 text-black"
      >
        <div className="max-w-md mx-auto flex justify-center">
          <h1 className="text-4xl lg:text-5xl font-semibold sm:text-center md:text-start">
            Navigating the digital landscape for success
          </h1>
        </div>

        <div
          className="max-w-[350px] md:max-w-[400px] m-auto md:row-span-3
          flex justify-center overflow-x-hidden"
        >
          <img src="/hero-img.svg" alt="Hero Image" />
        </div>

        <div className="max-w-md mx-auto flex flex-col items-center gap-y-7">
          <p className="sm:text-center md:text-start">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button
            className="w-full md:w-auto self-start bg-black text-white
            py-3 px-7 rounded-lg"
          >
            Book a consultation
          </button>
        </div>
      </div>

      <LogoInfiniteScroll />
    </section>
  );
};

export default HeroSection;
