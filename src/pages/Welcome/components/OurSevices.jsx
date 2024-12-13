import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SERVICES } from "@constants/services.constants";
import arrow from "@assets/images/arrow.svg";
import { twMerge } from "tailwind-merge";
import { SERVICES_SWIPER_BREAKPOINTS } from "@pages/Welcome/welcome.constants";

function OurServices() {
  return (
    <section className="pt-10 pb-20">
      <header className="pl-28">
        <h1 className="text-primary-solid text-4xl">Our Services</h1>
        <p className="text-secondary-solid text-base mt-2">
          Our Services For you Well- being we provide many services.
        </p>
      </header>
      <div className="mt-5 relative">
        <Swiper
          direction="horizontal"
          speed={500}
          spaceBetween={20}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          slidesOffsetBefore={112}
          slidesOffsetAfter={20}
          breakpoints={SERVICES_SWIPER_BREAKPOINTS}
        >
          {SERVICES?.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationButtons />
      </div>
    </section>
  );
}

const ServiceCard = ({ service }) => {
  return (
    <div
      className={twMerge(
        "p-5 border-[1px] border-primary-solid border-solid rounded-2xl cursor-pointer"
      )}
    >
      <img src={service.img} className="w-full" />
      <h4 className="mt-6 text-primary-solid text-2xl font-bold">
        {service.title}
      </h4>
      <p className="mt-3 text-[#656565]">{service.desc}</p>
    </div>
  );
};

function NavigationButtons() {
  return (
    <>
      <button className="custom-prev bg-primary-solid rounded-[30px] px-5 py-3 disabled:opacity-70 absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <img src={arrow} alt="" />
      </button>
      <button className="custom-next bg-primary-solid rounded-[30px] px-5 py-3 rotate-180 disabled:opacity-70 absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <img src={arrow} alt="" />
      </button>
    </>
  );
}

export default OurServices;
