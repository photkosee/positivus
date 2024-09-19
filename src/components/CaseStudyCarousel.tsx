// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowUpRight } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { CaseStudy } from "../types";

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
}

const CaseStudyCarousel = ({ caseStudies }: CaseStudyCarouselProps) => {
  return (
    // Be carefull when working with Swiper.js
    // sometimes it doesn't do a hot reload when you make change
    // don't forget to refresh the page before asking why is your change not working
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      className="w-full"
      centeredSlides
      breakpoints={{
        550: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 22,
          centeredSlides: false,
        },
      }}
    >
      {caseStudies.map((caseStudy, index) => (
        <SwiperSlide key={index}>
          <div
            className="size-full bg-tertiary text-white rounded-[45px]
            flex flex-col gap-y-5 px-7 md:px-10 text-sm justify-between select-none
            py-7 md:py-0 max-w-[330px] min-h-[230px] sm:min-h-[200px] md:min-h-[170px]"
          >
            <p>{caseStudy.content}</p>
            <button className="self-start flex gap-x-2 items-center text-primary">
              Learn more <LuArrowUpRight className="rotate-12 text-2xl" />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudyCarousel;
