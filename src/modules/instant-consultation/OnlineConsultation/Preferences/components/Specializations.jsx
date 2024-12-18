import Arrow from "@assets/icons/Arrow";
import Chevron from "@assets/icons/Chevron";
import { doctorSpecializations } from "@constants/doctor-specializations.constants";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
function Specializations() {
  const { state, dispatch } = useOnlineConsultationContext();
  const [showAll, setShowAll] = useState(false);

  const handleSpecializationChange = (specialization) => {
    dispatch({
      type: "SET_SPECIALIZATION",
      payload: specialization,
    });
  };

  return (
    <div className="px-20 mt-16">
      <div className="flex justify-between gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-primary-solid text-4xl">
            Consult with a verified doctor
          </h1>
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className={twJoin(
              "flex gap-2 items-center border-[1px] text-primary-solid",
              "border-primary-solid border-solid px-5 py-2 rounded-3xl bg-white"
            )}
          >
            View All <Arrow />
          </button>
        )}
      </div>
      <p className="text-xl mt-4 text-[#656565]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut bore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <article className="mt-8 grid grid-cols-5 gap-6">
        {doctorSpecializations
          .slice(0, showAll ? doctorSpecializations.length : 5)
          .map((doctorSpecialization, index) => {
            return (
              <SpecializationCard
                onClick={handleSpecializationChange}
                data={doctorSpecialization}
                isActive={
                  state.specialization.title === doctorSpecialization.title
                }
                key={index}
              />
            );
          })}
      </article>
      {showAll && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setShowAll(false);
          }}
          className={twJoin(
            "flex gap-4 items-center border-[1px] text-primary-solid mx-auto mt-5",
            "border-primary-solid border-solid px-5 py-2 rounded-3xl bg-white"
          )}
        >
          View Less <Chevron fill="#E77E3A" className="-rotate-90" />
        </button>
      )}
    </div>
  );
}

function SpecializationCard({ data, onClick, isActive }) {
  return (
    <article
      onClick={() => onClick(data)}
      className={twMerge(
        "col-span-1 overflow-hidden cursor-pointer",
        "border-[1px] border-transparent relative",
        isActive &&
          "border-[1px] border-primary-solid bg-primary-light rounded-xl",
        isActive && "text-primary-solid shadow-[0px_4px_10px_0px_#7BAED533]"
      )}
    >
      <img
        src={data?.img}
        alt=""
        className={twJoin(
          "w-full h-[154px] rounded-xl shadow-[0px_4px_12px_0px_#E77E3A33] object-cover"
        )}
      />
      <h3
        className={twMerge(
          "text-[#656565] text-[20px] font-nunito-bold my-2 text-center",
          isActive && "text-primary-solid"
        )}
      >
        {data?.title}
      </h3>
      <div
        className={twJoin(
          "bg-primary-solid px-3 py-[2px]",
          "rounded-2xl inline-block absolute top-2 right-2",
          "border-[1px] border-white border-solid"
        )}
      >
        <p className="text-white text-sm">&#8377; {data?.price}</p>
      </div>
    </article>
  );
}

export default Specializations;
