import DiagnosticPatientDetails from "@modules/diagnostics/ConfirmBooking/PatientDetails/PatientDetails";
import DiagnosticPreferences from "@modules/diagnostics/ConfirmBooking/Preferences/Preferences";
import DiagnosticAddressDetails from "@modules/diagnostics/ConfirmBooking/AddressDetails/AddressDetails";
import DiagnosticPaymentDetails from "@modules/diagnostics/ConfirmBooking/PaymentDetails/PaymentDetails";


import Diagnostics from "@modules/diagnostics/Diagnostics";
import DoctorConsultation from "@modules/instant-consultation/DoctorConsultation/DoctorConsultation";
import InstantConsultation from "@modules/instant-consultation/InstantConsultation/InstantConsultation";
import PatientDetails from "@modules/instant-consultation/OnlineConsultation/PatientDetails/PatientDetails";
import AboutUs from "@pages/AboutUs/AboutUs";
import ContactUs from "@pages/ContactUs/ContactUs";
import Login from "@pages/Login/Login";
import PrivacyAndPolicy from "@pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "@pages/TermsAndConditions/TermsAndConditions";
import Welcome from "@pages/Welcome/Welcome";
import { Route, Routes as Switch, useLocation } from "react-router-dom";


import BookingSuccess from "@modules/instant-consultation/OnlineConsultation/BookingSuccess";
import PaymentDetails from "@modules/instant-consultation/OnlineConsultation/PaymentDetails/PaymentDetails";
import Preferences from "@modules/instant-consultation/OnlineConsultation/Preferences/Preferences";
import Home from "@pages/Home/Home";
import Receipt from "@pages/Receipt/Receipt";
import { useEffect } from "react";

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
      <Route path="/receipt/:receiptId" element={<Receipt />} />
      <Route path="/diagnostics">
        <Route path="package" element={<Diagnostics />} />
        <Route path="preferences" element={<DiagnosticPreferences />} />
        <Route path="patient-details" element={<DiagnosticPatientDetails />} />
        <Route path="address-details" element={<DiagnosticAddressDetails />} />
        <Route path="payment-details" element={<DiagnosticPaymentDetails />} />
        <Route path="booking-success" element={<BookingSuccess />} />
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
