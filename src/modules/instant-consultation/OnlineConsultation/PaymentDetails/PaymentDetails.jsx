import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import BookingHeader from "@components/BookingHeader";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import BookingCard from "@components/BookingCard/BookingCard";

function PaymentDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];
  const { state, dispatch } = useOnlineConsultationContext();

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-10%">
        <Header />
        <div className="px-24 mt-6">
          <BookingHeader />
        </div>
        <div className="mt-10 mb-10">
          <Tabs
            tabItems={[
              {
                id: "preferences",
                title: "Preference Selection",
              },
              {
                id: "patient-details",
                title: "Add Patient",
              },
              {
                id: "payment-details",
                title: "Payment",
              },
            ]}
            onClick={(tabItem) => {
              navigate(`/online-consultation/${tabItem?.id}`);
            }}
            active={active}
          />
        </div>
      </section>
      <BookingCard
        className="mx-20 mt-10 mb-10"
        data={state}
        continueLabel="Continue and Pay"
        showContinue={
          state?.specialization &&
          state?.consultationType &&
          state?.patients?.length > 0
        }
        showAvailableDoctorDetails={
          state?.specialization && state?.consultationType
        }
        showPatientDetails={state?.patients?.length > 0}
        showPaymentDetails
        onContinue={() => {
          navigate("/online-consultation/booking-success");
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

export default PaymentDetails;
