import AboutUs from "@pages/AboutUs/AboutUs";
import ContactUs from "@pages/ContactUs/ContactUs";
import Login from "@pages/Login/Login";
import PrivacyAndPolicy from "@pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "@pages/TermsAndConditions/TermsAndConditions";
import Welcome from "@pages/Welcome/Welcome";
import { Route, Routes as Switch, useLocation } from "react-router-dom";
import Diagnostics from "@modules/diagnostics/Diagnostics";
import InstantConsultation from "@modules/instant-consultation/InstantConsultation/InstantConsultation";
import OnlineConsultation from "@modules/instant-consultation/OnlineConsultation/OnlineConsultation";
import DoctorConsultation from "@modules/instant-consultation/DoctorConsultation/DoctorConsultation";
import SelectPatient from "@modules/instant-consultation/OnlineConsultation/SelectPatient";
import PaymentDetails from "@modules/instant-consultation/OnlineConsultation/PaymentDetails";
import BookingSuccess from "@modules/instant-consultation/OnlineConsultation/BookingSuccess";
import { useEffect } from "react";
import Home from "@pages/Home/Home";

function Routes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      <Route path="/diagnostics/package" element={<Diagnostics />} />
      <Route path="/instant-consultation" element={<InstantConsultation />} />
      <Route path="/online-consultation" element={<OnlineConsultation />} />
      <Route
        path="/online-consultation/select-patient"
        element={<SelectPatient />}
      />
      <Route
        path="/online-consultation/payment-details"
        element={<PaymentDetails />}
      />
      <Route
        path="/online-consultation/booking-success"
        element={<BookingSuccess />}
      />
      <Route path="/doctor-consultation" element={<DoctorConsultation />} />
    </Switch>
  );
}

export default Routes;
