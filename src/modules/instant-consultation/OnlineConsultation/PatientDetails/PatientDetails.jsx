import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import BookingHeader from "@components/BookingHeader";

function PatientDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];

  const handleTabClick = (tabItem) => {
    navigate(`/online-consultation/${tabItem?.id}`);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-50%">
        <Header />
        <div className="px-24 mt-6">
          <BookingHeader />
        </div>
        <div className="mt-20 mb-10">
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
            onClick={handleTabClick}
            active={active}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PatientDetails;
