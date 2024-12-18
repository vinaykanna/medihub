import AboutUs from "@pages/AboutUs/AboutUs";
import ContactUs from "@pages/ContactUs/ContactUs";
import Login from "@pages/Login/Login";
import PrivacyAndPolicy from "@pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "@pages/TermsAndConditions/TermsAndConditions";
import Welcome from "@pages/Welcome/Welcome";
import {
  Navigate,
  Route,
  Routes as Switch,
  useLocation,
} from "react-router-dom";
import Diagnostics from "@modules/diagnostics/Diagnostics";
import InstantConsultation from "@modules/instant-consultation/InstantConsultation/InstantConsultation";
import DoctorConsultation from "@modules/instant-consultation/DoctorConsultation/DoctorConsultation";
import PatientDetails from "@modules/instant-consultation/OnlineConsultation/PatientDetails/PatientDetails";
import PaymentDetails from "@modules/instant-consultation/OnlineConsultation/PaymentDetails/PaymentDetails";
import BookingSuccess from "@modules/instant-consultation/OnlineConsultation/BookingSuccess";
import { useEffect } from "react";
import Home from "@pages/Home/Home";
import Preferences from "@modules/instant-consultation/OnlineConsultation/Preferences/Preferences";
import ConfirmBooking from "@modules/diagnostics/ConfirmBooking/ConfirmBooking";

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
      <Route path="/diagnostics">
        <Route path="package" element={<Diagnostics />} />
        <Route path="preferences" element={<ConfirmBooking />} />
        <Route path="patient-details" element={<ConfirmBooking />} />
        <Route path="address-details" element={<ConfirmBooking />} />
        <Route path="payment-details" element={<ConfirmBooking />} />
      </Route>
      <Route path="/instant-consultation" element={<InstantConsultation />} />
      <Route path="/online-consultation">
        <Route path="preferences" element={<Preferences />} />
        <Route path="patient-details" element={<PatientDetails />} />
        <Route path="payment-details" element={<PaymentDetails />} />
        <Route path="booking-success" element={<BookingSuccess />} />
      </Route>
      <Route path="/doctor-consultation" element={<DoctorConsultation />} />
    </Switch>
  );
}

export default Routes;
