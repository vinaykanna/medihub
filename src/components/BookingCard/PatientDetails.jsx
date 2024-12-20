import { twJoin } from "tailwind-merge";
import closeIcon from "@assets/images/close.svg";

function PatientDetails({ patientDetails }) {
  return (
    <div className="col-span-1">
      <h3 className="text-[#656565] text-lg">Selected Patient:</h3>
      <div
        className={twJoin(
          "flex gap-10 justify-between bg-[#FAFAFA]",
          "px-2 py-1 mt-2 rounded items-center max-w-fit"
        )}
      >
        <h4 className="text-lg text-primary-solid">
          {patientDetails?.patientName}{" "}
          <span className="text-sm text-[#656565]">
            ({patientDetails?.gender} - {patientDetails?.age})
          </span>
        </h4>
        <div className="p-1 rounded bg-primary-light cursor-pointer">
          <img src={closeIcon} className="w-3 h-3" />
        </div>
      </div>
      <h3 className="text-[#656565] text-lg mt-4">Patient’s Symptoms:</h3>
      <div className="border-[1px] border-primary-solid rounded-2xl p-3 mt-2">
        <p className="text-base text-[#656565]">{patientDetails?.symptoms}</p>
      </div>
    </div>
  );
}

export default PatientDetails;
