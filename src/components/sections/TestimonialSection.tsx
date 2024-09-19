import TestimonialCarousel from "../carousels/TestimonialCarousel";
import testimonials from "../../data/testimonials";

const TestimonialSection = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col gap-y-10 pt-28 px-3 md:px-7">
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-3 items-center">
        <h3
          className="text-center lg:text-start text-3xl font-semibold
          bg-primary px-1 rounded-md"
        >
          Testimonials
        </h3>
        <p className="max-w-lg mx-auto lg:mx-0 text-wrap text-center lg:text-start">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-tertiary py-10 rounded-main">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
