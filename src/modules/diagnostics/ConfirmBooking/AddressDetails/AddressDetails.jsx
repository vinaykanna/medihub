import BookingHeader from "@components/BookingHeader";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import AddAddress from "./components/AddAddress";
import ExistingAddress from "./components/ExistingAddress";

function AddressDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];

  const handleTabClick = (tabItem) => {
    navigate(`/diagnostics/${tabItem?.id}`);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-50%">
        <Header />
        <div className="px-24 mt-6">
          <BookingHeader/>
        </div>
        <div className="mt-10 mb-10">
          <Tabs
          tabCount={4}
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
                id: "address-details",
                title: "Add Address",
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
      <section className="px-24 mt-6">
        <AddAddress />
        <ExistingAddress />
      </section>
      <Footer />
    </>
  );
}

export default AddressDetails;
