import doctor from "@assets/images/doctor.png";
import location from "@assets/images/location2.svg";
import star from "@assets/images/star.svg";
import chat from "@assets/images/chat.svg";
import firstAid from "@assets/images/first_aid.svg";
import { twJoin } from "tailwind-merge";
function AvailableDoctorDetails() {
  return (
    <div className="mt-8">
      <h4 className="font-bold font-nunito-bold text-[#656565] text-xl">
        Available Doctor Details
      </h4>
      <div
        className={twJoin(
          "mt-3 rounded-3xl shadow-[0px_2px_10px_0px_#E3854066] p-3 flex"
        )}
      >
        <div className="flex-1 flex gap-5">
          <div className="bg-secondary-solid overflow-hidden rounded-xl w-[100px] h-[100px]">
            <img
              src={doctor}
              className="w-[100px] h-[100px] mx-auto object-cover object-top"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[#656565] text-2xl">Dr. Jenny Wilson</h3>
            <p className="text-[#656565] text-base mt-2">
              MBBS General Medicine, MD General Medicine
            </p>
            <div className="flex gap-2 items-center mt-2">
              <img src={location} />
              <p className="text-[#656565] text-base">
                ABC Hospital, 4140 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center justify-end">
            <img src={star} className="w-[18px] h-[18px]" />
            <p className="text-xs text-[#656565]">4.9 (96 reviews)</p>
          </div>
          <div className="flex gap-2 mt-4 items-center justify-end">
            <img src={firstAid} className="w-[24px] h-[24px]" />
            <p className="text-base text-[#656565]">10 Years</p>
          </div>
          <div className="flex gap-2 mt-2 items-center justify-end">
            <img src={chat} className="w-[24px] h-[24px]" />
            <p className="text-base text-[#656565]">English, Hindi, Telugu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableDoctorDetails;
