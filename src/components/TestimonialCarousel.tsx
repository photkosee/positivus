import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Testimonial } from "../types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const paginationRef = useRef<SwiperClass | null>(null);
  const [currPage, setCurrPage] = useState<number>(0);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      className="w-full"
      initialSlide={Math.round(testimonials.length / 2) - 1}
      centeredSlides
      grabCursor={true}
      breakpoints={{
        550: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      onSwiper={(swiper) => {
        paginationRef.current = swiper;
      }}
      onRealIndexChange={(swiper) => {
        setCurrPage(swiper.activeIndex);
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div
            className="size-full bg-tertiary text-white rounded-main
            flex flex-col gap-y-8 px-7 md:px-10 text-sm justify-between select-none
            py-3 md:py-0 min-h-[230px] sm:min-h-[200px] md:min-h-[170px]"
          >
            <div
              className="border border-primary rounded-main p-5 md:p-9 relative
              before:absolute before:content-[''] before:top-[calc(100%)] before:left-14
              before:size-7 before:transform before:rotate-45 before:origin-top-right
              before:border-b before:border-r before:border-primary before:bg-tertiary"
            >
              <p>{testimonial.content}</p>
            </div>

            <div className="flex flex-col pl-16">
              <p className="text-base text-primary">{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="flex justify-center items-center gap-x-10 md:gap-x-20 mt-7 md:mt-20">
        <button
          onClick={() =>
            paginationRef.current && paginationRef.current.slidePrev()
          }
          className={`size-10 p-2 flex items-center ${
            currPage === 0 ? "text-neutral-700" : "text-white"
          }`}
          disabled={currPage === 0}
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-x-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (paginationRef.current) {
                  paginationRef.current.slideTo(index);
                  setCurrPage(index);
                }
              }}
              className="text-white size-5 sm:size-7 md:size-9 p-1 flex items-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                  fill={`${index === currPage ? "#B9FF66" : "white"}`}
                />
              </svg>
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            paginationRef.current && paginationRef.current.slideNext()
          }
          className={`size-10 p-2 flex items-center ${
            currPage === testimonials.length - 1
              ? "text-neutral-700"
              : "text-white"
          }`}
          disabled={currPage === testimonials.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </Swiper>
  );
};

export default TestimonialCarousel;
