import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  TESTIMONIALS,
  TESTIMONIALS_SWIPER_BREAKPOINTS,
} from "@constants/testimonials.constants";

import { twJoin, twMerge } from "tailwind-merge";
import Chevron from "@assets/icons/Chevron";
import Rating from "@components/Rating";

function Testimonials() {
  return (
    <section className="bg-[#FDF2EC] p-14">
      <div className="max-w-[1267px] mx-auto">
        <h1 className="text-primary-solid text-[40px] text-center">
          Our Customers' Experiences
        </h1>
        <p className="text-secondary-solid text-center">
          From our satisfied customers about how our services have positively
          impacted.
        </p>
        <div className="relative">
          <Swiper
            className="mt-8 py-10"
            direction="horizontal"
            speed={500}
            spaceBetween={30}
            navigation={{
              prevEl: ".testimonials-custom-prev",
              nextEl: ".testimonials-custom-next",
            }}
            initialSlide={1}
            loop
            modules={[Navigation]}
            breakpoints={TESTIMONIALS_SWIPER_BREAKPOINTS}
            centeredSlides
          >
            {TESTIMONIALS?.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => {
                    return (
                      <TestimonialCard
                        testimonial={testimonial}
                        isActive={isActive}
                      />
                    );
                  }}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <NavigationButtons />
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <article
      className={twMerge(
        "rounded-3xl bg-white p-7 text-center opacity-50 transition-all",
        isActive && "border-[1px] border-primary-solid scale-110 z-10",
        isActive && "text-white shadow-[0px_5px_19px_0px_#E3854040] opacity-100"
      )}
    >
      <img src={testimonial.img} className="mx-auto" alt="" />
      <Rating rating={testimonial.rating} className="mt-9 justify-center" />
      <p className="mt-8 text-[#656565] leading-6">{testimonial.desc}</p>
    </article>
  );
};

function NavigationButtons() {
  return (
    <>
      <button
        className={twJoin(
          "w-10 h-10 flex items-center justify-center",
          "testimonials-custom-prev bg-primary-solid",
          "rounded-full w-10 h-10 rotate-180 disabled:opacity-70",
          "absolute -left-5 top-1/2 -translate-y-1/2 z-10"
        )}
      >
        <Chevron />
      </button>
      <button
        className={twJoin(
          "w-10 h-10 flex items-center justify-center",
          "testimonials-custom-next bg-primary-solid",
          "rounded-full px-4 py-4 disabled:opacity-70",
          "absolute -right-5 top-1/2 -translate-y-1/2 z-10"
        )}
      >
        <Chevron />
      </button>
    </>
  );
}

export default Testimonials;
