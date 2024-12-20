import Footer from "@components/Footer";
import Header from "@components/Header";
import BookingCard from "@components/BookingCard/BookingCard";
import Specializations from "./components/Specializations";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import { useNavigate } from "react-router-dom";

function Preferences() {
  const navigate = useNavigate();
  const { state, dispatch } = useOnlineConsultationContext();

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-10%">
        <Header />
        <Specializations />
      </section>
      <BookingCard
        className="mx-20 mt-10 mb-10"
        data={state}
        showContinue={state?.specialization && state?.consultationType}
        showAvailableDoctorDetails={
          state?.specialization && state?.consultationType
        }
        onContinue={() => {
          navigate("/online-consultation/patient-details");
        }}
        onConsultationPreferenceChange={(value) => {
          dispatch({
            type: "SET_CONSULTATION_TYPE",
            payload: value,
          });
        }}
      />
      <Footer />
    </>
  );
}

export default Preferences;
