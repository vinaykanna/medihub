import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import arrow from "@assets/images/arrow.svg";
import { twJoin, twMerge } from "tailwind-merge";
import { HEALTH_CONCERNS } from "@constants/health-concerns.constants";
import { HEALTH_CONCERNS_SWIPER_BREAKPOINTS } from "@pages/Welcome/welcome.constants";
import Chevron from "@assets/icons/Chevron";

function HealthConcerns() {
  return (
    <section className="py-8 bg-gradient-to-b from-secondary-light from-10%">
      <header className="pl-28">
        <h1 className="text-primary-solid text-4xl">
          Consult Now for any health concern
        </h1>
        <p className="text-secondary-solid text-base mt-2">
          Private online consultations with verified doctors in all specialists
        </p>
      </header>
      <div className="mt-5 relative">
        <Swiper
          direction="horizontal"
          speed={500}
          spaceBetween={20}
          navigation={{
            prevEl: ".health_concenrs_custom_prev",
            nextEl: ".health_concerns_custom_next",
          }}
          modules={[Navigation]}
          slidesOffsetBefore={112}
          slidesOffsetAfter={20}
          breakpoints={HEALTH_CONCERNS_SWIPER_BREAKPOINTS}
        >
          {HEALTH_CONCERNS?.map((healthConcern, index) => {
            return (
              <SwiperSlide key={index}>
                <HealthConcernCard healthConcern={healthConcern} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons />
      </div>
    </section>
  );
}

const HealthConcernCard = ({ healthConcern }) => {
  return (
    <div>
      <div
        className={twMerge(
          "p-7 border-[1px] bg-[#FDF2EC] border-primary-solid",
          "border-solid rounded-2xl cursor-pointer"
        )}
      >
        <img src={healthConcern.img} className="w-[90px] h-[119px] mx-auto" />
      </div>
      <h4 className="mt-2 text-secondary-solid text-lg font-bold text-center">
        {healthConcern.title}
      </h4>
    </div>
  );
};

function NavigationButtons() {
  return (
    <>
      <button
        className={twJoin(
          "w-10 h-10 flex items-center justify-center",
          "health_concenrs_custom_prev bg-primary-solid",
          "rounded-full w-10 h-10 rotate-180 disabled:opacity-70",
          "absolute left-6 top-1/2 -translate-y-1/2 z-10"
        )}
      >
        <Chevron />
      </button>
      <button
        className={twJoin(
          "w-10 h-10 flex items-center justify-center",
          "health_concerns_custom_next bg-primary-solid",
          "rounded-full px-4 py-4 disabled:opacity-70",
          "absolute right-4 top-1/2 -translate-y-1/2 z-10"
        )}
      >
        <Chevron />
      </button>
    </>
  );
}

export default HealthConcerns;
