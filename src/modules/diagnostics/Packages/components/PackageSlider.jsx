import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { packageData, PACKAGES_SWIPER_BREAKPOINTS } from "../../../../constants/diagnostics.constants";
import { NavigationButtons } from "../../../../pages/Welcome/components/OurSevices";
import PackageCard from "./PackageCard";
function PackageSlider() {
  return (
    <div>

<div className="relative">
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
          breakpoints={PACKAGES_SWIPER_BREAKPOINTS}
          slidesPerView={2}
        
          loop={false}
        >
          {packageData?.map((pkg, index) => {
            return (
              <SwiperSlide key={index}>
                
           <div className="pt-10 mb-2">     <PackageCard isSlide={true} pkg={pkg} /></div>

               
              </SwiperSlide>
            );
          })}
        </Swiper>

        <NavigationButtons />
      </div>
    </div>
  )
}

export default PackageSlider