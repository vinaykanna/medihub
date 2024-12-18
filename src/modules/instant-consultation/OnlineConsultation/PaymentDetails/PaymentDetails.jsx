import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
function PaymentDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-10%">
        <Header />
        <div className="px-20 mt-20 mb-10">
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
      <Footer />
    </>
  );
}

export default PaymentDetails;
