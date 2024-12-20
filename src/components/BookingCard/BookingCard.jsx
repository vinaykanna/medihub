import AudioCall from "@assets/icons/AudioCall";
import VideoCall from "@assets/icons/VideoCall";
import { twJoin, twMerge } from "tailwind-merge";
import PreferenceType from "./PreferenceType";
import AvailableDoctorDetails from "./AvailableDoctorDetails";
import PatientDetails from "./PatientDetails";
import PaymentDetails from "./PaymentDetails";

function BookingCard({
  data,
  onConsultationPreferenceChange,
  className,
  showContinue,
  showAvailableDoctorDetails,
  showPatientDetails,
  showPaymentDetails,
  continueLabel = "Continue",
  onContinue = () => {},
}) {
  return (
    <div
      className={twJoin(
        "p-8 shadow-[0px_4px_20px_0px_#E77E3A33]",
        "border-[1px] border-primary-solid border-solid rounded-3xl",
        className
      )}
    >
      <header className="flex justify-between gap-10 items-center">
        <div>
          <h3 className="text-primary-solid text-2xl">Online Consultation</h3>
          <p className="text-secondary-solid mt-1 text-xl">
            Consult with a verified Doctor
          </p>
        </div>
        <div className="flex gap-2">
          {data?.consultationType && (
            <div
              className={twMerge(
                "bg-primary-solid px-3 flex justify-center items-center rounded-lg",
                "w-[44px] h-[44px]"
              )}
            >
              {data?.consultationType === "Tele-Consultation" && (
                <AudioCall fill="white" className="w-5 h-5" />
              )}
              {data?.consultationType === "Video Consultation" && (
                <VideoCall fill="white" className="w-5 h-5" />
              )}
            </div>
          )}
          {data?.specialization && (
            <div
              className={twJoin(
                "bg-secondary-light rounded-xl px-4 py-2",
                "flex gap-5 items-center text-lg text-[#656565]"
              )}
            >
              <p className="font-bold font-nunito-bold">
                {data?.specialization?.title}
              </p>
              <p>
                Final Fee -{" "}
                <span className="text-primary-solid">
                  &#8377; {data?.specialization?.price}
                </span>
              </p>
            </div>
          )}
        </div>
      </header>
      <div className="mt-5 flex gap-10 items-center">
        <div>
          <h5 className="text-xl text-[#656565]">Select Preferences:</h5>
        </div>
        <PreferenceType
          id="video_call"
          icon={VideoCall}
          label="Video Consultation"
          checked={data?.consultationType === "Video Consultation"}
          onChange={onConsultationPreferenceChange}
        />
        <PreferenceType
          id="audio_call"
          icon={AudioCall}
          label="Tele-Consultation"
          checked={data?.consultationType === "Tele-Consultation"}
          onChange={onConsultationPreferenceChange}
        />
      </div>
      {showAvailableDoctorDetails && <AvailableDoctorDetails />}
      {(showPatientDetails || showPaymentDetails) && (
        <div className="grid grid-cols-2 mt-7 gap-10 items-start">
          {showPatientDetails && (
            <PatientDetails patientDetails={data?.patients?.[0]} />
          )}
          {showPaymentDetails && <PaymentDetails />}
        </div>
      )}
      {showContinue && (
        <div className="text-right mt-5">
          <button
            onClick={onContinue}
            className={twJoin(
              "bg-primary-solid px-10 rounded-3xl py-2",
              "text-white min-w-[300px]"
            )}
          >
            {continueLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingCard;
