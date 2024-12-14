import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { packageData, PACKAGES_SWIPER_BREAKPOINTS } from "../../../../constants/diagnostics.constants";
import { NavigationButtons } from "../../../../pages/Welcome/components/OurSevices";
import PackageCard from "./PackageCard";
import arrow from "@assets/images/arrow.svg";
function PackageSlider() {
  return (
    <div>

<div className="relative">
        <Swiper
          direction="horizontal"
          speed={500}
          spaceBetween={15}
          navigation={{
            prevEl: ".custom-prev ",
            nextEl: ".custom-next " ,
          }}
          modules={[Navigation]}
          // slidesOffsetBefore={112}
          // slidesOffsetAfter={20}
          // breakpoints={PACKAGES_SWIPER_BREAKPOINTS}
          slidesPerView={2}
        
          // loop={false}
        >
          {packageData?.map((pkg, index) => {
            return (
              <SwiperSlide key={index}>
                
           <div className="pt-10 mb-2 px-1">     <PackageCard isSlide={true} pkg={pkg} /></div>

               
              </SwiperSlide>
            );
          })}
        </Swiper>

        <>
      <button className=" left-[-63px] custom-prev bg-primary-solid rounded-[30px] px-5 py-3 disabled:opacity-70  top-1/2 -translate-y-1/2 z-10 absolute ">
        <img src={arrow} alt="" />
      </button>
      <button className=" right-[-63px] custom-next bg-primary-solid rounded-[30px] px-5 py-3 rotate-180 disabled:opacity-70 right-4 top-1/2 -translate-y-1/2 z-10 absolute ]">
        <img src={arrow} alt="" />
      </button>
    </>

      </div>
    </div>
  )
}

export default PackageSlider