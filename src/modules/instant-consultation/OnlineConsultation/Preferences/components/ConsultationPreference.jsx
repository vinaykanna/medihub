import AudioCall from "@assets/icons/AudioCall";
import VideoCall from "@assets/icons/VideoCall";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import { twJoin, twMerge } from "tailwind-merge";
import doctor from "@assets/images/doctor.png";
import location from "@assets/images/location2.svg";
import star from "@assets/images/star.svg";
import chat from "@assets/images/chat.svg";
import firstAid from "@assets/images/first_aid.svg";

function ConsultationPreference() {
  const { state, dispatch } = useOnlineConsultationContext();

  const handleConsultationPreferenceChange = (value) => {
    dispatch({
      type: "SET_CONSULTATION_TYPE",
      payload: value,
    });
  };
  return (
    <div
      className={twJoin(
        "mx-20 mt-20 mb-10 p-8 shadow-[0px_4px_20px_0px_#E77E3A33]",
        "border-[1px] border-primary-solid border-solid rounded-3xl"
      )}
    >
      <header className="flex justify-between gap-10 items-center">
        <div>
          <h3 className="text-primary-solid text-2xl">Online Consultation</h3>
          <p className="text-secondary-solid mt-1 text-xl">
            Consult with a verified Doctor
          </p>
        </div>
        {state?.specialization && (
          <div
            className="bg-secondary-light rounded-xl px-4 py-2 flex gap-5 items-center
          text-lg text-[#656565]"
          >
            <p className="font-bold font-nunito-bold">
              {state?.specialization?.title}
            </p>
            <p>
              Final Fee -{" "}
              <span className="text-primary-solid">
                &#8377; {state?.specialization?.price}
              </span>
            </p>
          </div>
        )}
      </header>
      <div className="mt-5 flex gap-10 items-center">
        <div>
          <h5 className="text-xl text-[#656565]">Select Preferences:</h5>
        </div>
        <PreferenceType
          id="video_call"
          icon={VideoCall}
          label="Video Consultation"
          checked={state?.consultationType === "Video Consultation"}
          onChange={handleConsultationPreferenceChange}
        />
        <PreferenceType
          id="audio_call"
          icon={AudioCall}
          label="Tele-Consultation"
          checked={state?.consultationType === "Tele-Consultation"}
          onChange={handleConsultationPreferenceChange}
        />
      </div>
      {state.specialization && state.consultationType && <AvailableDoctor />}
      {state.specialization && state.consultationType && (
        <div className="text-right mt-5">
          <button
            className={twJoin(
              "bg-primary-solid px-10 rounded-3xl py-2",
              "text-white min-w-[300px]"
            )}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

function PreferenceType({ icon: Icon, label, id, checked, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="w-[16px] h-[16px]"
        type="radio"
        name="consultation_preference"
        id={id}
        checked={checked}
        onChange={() => onChange(label)}
      />
      <label
        htmlFor={id}
        className={twMerge(
          "flex text-[#BDBDBD] items-center gap-2 cursor-pointer font-nunito-bold",
          checked && "text-secondary-solid font-bold"
        )}
      >
        <div
          className={twMerge(
            "border-[1px] border-[#BDBDBD] border-solid p-[8px] rounded-lg",
            checked && "border-transparent bg-primary-solid"
          )}
        >
          <Icon fill={checked ? "#fff" : "#BDBDBD"} />
        </div>
        {label}
      </label>
    </div>
  );
}

function AvailableDoctor() {
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

export default ConsultationPreference;
