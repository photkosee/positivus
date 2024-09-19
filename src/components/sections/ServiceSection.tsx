import services from "../../data/services";
import ServiceCard from "../cards/ServiceCard";

const ServiceSection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 px-7">
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center">
        <h3
          className="text-center lg:text-start text-3xl font-semibold
          bg-primary px-1 rounded-md"
        >
          Services
        </h3>
        <p className="max-w-lg mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title1={service.title1}
            title2={service.title2}
            image={service.image}
            alt={service.alt}
            theme={service.theme}
          />
        ))}
      </div>

      <div
        className="mx-auto bg-secondary py-9 px-7 md:pl-9 flex items-center justify-center
        lg:justify-between gap-x-5 rounded-main max-h-80 md:max-h-60 mt-10 w-full max-w-lg lg:max-w-5xl"
      >
        <div className="max-w-md flex flex-col gap-y-3">
          <h5 className="text-2xl font-semibold">{`Let’s make things happen`}</h5>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white py-3 px-7 rounded-xl w-full lg:w-auto self-start">
            Get your free proposal
          </button>
        </div>
        <img
          src="/services/make-things-happen.svg"
          alt="Hero Image"
          className="max-h-[270px] h-full hidden lg:block"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
