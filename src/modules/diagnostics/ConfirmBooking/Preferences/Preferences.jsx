import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import BookingHeader from "@components/BookingHeader";
import PreferanceForm from "./components/PreferanceForm";
import { usePackageBookingContext } from "../../../../contexts/PackageBookingContext";


function Preferances() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];
  const { state, dispatch } = usePackageBookingContext();



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
            tabCount={getTabItems(state?.visitType).length}
            tabItems={getTabItems(state?.visitType)}
            onClick={handleTabClick}
            active={active}
          />
        </div>
      </section>
      <section className="px-24 mt-6">
        <PreferanceForm/>
      </section>
      <Footer />
    </>
  );
}

export default Preferances;


export const getTabItems = (visitType) => {
  const fourTabs = [
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
  ]

  const threeTabs = [
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
    }
  ]

  if(visitType === "Home Visit"){
    return fourTabs
  }
  else {
    return threeTabs
  }
}