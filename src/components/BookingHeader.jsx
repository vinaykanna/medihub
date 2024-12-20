import React from "react";
import avatar from "@assets/images/avatar.png";

const availableDoctors = [
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/female",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/female",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/female",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/female",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
  {
    img: "https://avatar.iran.liara.run/public/job/doctor/female",
  },
];

function BookingHeader() {
  return (
    <div className="flex justify-between gap-10 items-center">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
        <p className="self-stretch flex-grow-0 flex-shrink-0 h-[35px] text-4xl font-bold text-left text-[#e77e3a]">
          Confirm Booking
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-10 gap-2.5 pl-1 pr-2.5 rounded-lg bg-[#e77e3a]/25">
            <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1.5">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect width={32} height={32} rx={6} fill="#E77E3A" />
                <path
                  d="M21.9962 16.5478C21.6719 19.2483 19.9031 20.3274 19.1392 21.1108C18.3741 21.8964 18.5112 22.0528 18.5625 23.205C18.5711 23.3475 18.5504 23.4903 18.5017 23.6246C18.453 23.7588 18.3773 23.8816 18.2793 23.9855C18.1813 24.0894 18.0631 24.1721 17.9319 24.2286C17.8007 24.285 17.6594 24.314 17.5166 24.3137H14.4815C14.3388 24.3135 14.1976 24.2842 14.0666 24.2276C13.9356 24.171 13.8175 24.0883 13.7195 23.9845C13.6215 23.8807 13.5457 23.7581 13.4967 23.6241C13.4477 23.4901 13.4264 23.3475 13.4344 23.205C13.4344 22.0745 13.5394 21.8119 12.8589 21.1108C11.991 20.2429 9.94934 19.0177 9.94934 15.648C9.94412 14.811 10.1124 13.982 10.4434 13.2132C10.7745 12.4445 11.2613 11.7527 11.873 11.1814C12.4847 10.6101 13.2082 10.1717 13.9977 9.89385C14.7873 9.61603 15.6259 9.50478 16.4606 9.56713C17.2952 9.62947 18.108 9.86406 18.8475 10.2561C19.587 10.6481 20.2373 11.1891 20.7574 11.8449C21.2775 12.5008 21.6561 13.2572 21.8693 14.0667C22.0825 14.8761 22.1257 15.7209 21.9962 16.5478Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.242 24.251V25.9775C14.242 26.4491 14.5046 26.8362 14.8278 26.8362H17.1721C17.4975 26.8362 17.759 26.448 17.759 25.9775V24.251M15.1098 12.2155C14.4356 12.2159 13.7891 12.4839 13.3124 12.9608C12.8358 13.4376 12.568 14.0843 12.568 14.7585M24.3728 15.8787H26.467M22.2649 9.01371L23.7505 7.52813M23.4067 21.6977L24.8923 23.1822M16.0005 5V6.69341M8.28138 7.52698L9.75669 9.01371M7.1395 23.1822L8.61481 21.6977M7.62823 15.8787H5.53516"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#656565]">
                96% of users found diagnostics consultation beneficial.
              </p>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#656565] font-normal">
            Users found diagnostics helpful in detecting potential health risks
            early.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-primary-solid font-bold font-nunito-bold text-2xl text-center">
          General Physician that are available now
        </h2>
        <div className="flex justify-center mt-3 items-center">
          {availableDoctors.slice(0, 6).map((doctor, index) => {
            return (
              <img
                src={doctor.img}
                className="-ml-2 w-[50px] h-[50px] border-2 border-[#EFEFEF] border-solid rounded-full"
                key={index}
              />
            );
          })}
          <span className="text-[#747474] text-xl ml-2">
            +{availableDoctors.slice(6).length}
          </span>
        </div>
        <p className="text-[#656565] text-lg mt-[10px] text-center">
          One of them will be assisting you.
        </p>
      </div>
    </div>
  );
}

export default BookingHeader;
