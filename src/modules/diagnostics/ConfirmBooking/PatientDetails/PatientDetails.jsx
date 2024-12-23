import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import BookingHeader from "@components/BookingHeader";
import AddPatient from "./components/AddPatient";
import ExistingPatients from "./components/ExistingPatients";
import { getTabItems } from "../Preferences/Preferences";
import { usePackageBookingContext } from "../../../../contexts/PackageBookingContext";

function PatientDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];
  const {state,dispatch} = usePackageBookingContext()

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
            tabItems={getTabItems(state?.visitType)}
            tabCount={getTabItems(state?.visitType).length}
            onClick={handleTabClick}
            active={active}
          />
        </div>
      </section>
      <section className="px-24 mt-6">
        <AddPatient />
        <ExistingPatients />
      </section>
      <Footer />
    </>
  );
}

export default PatientDetails;
