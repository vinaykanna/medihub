import FindADoctor from "@modules/doctor-consultation/FindADoctor/FindaADoctor";
import AboutUs from "@pages/AboutUs/AboutUs";
import ContactUs from "@pages/ContactUs/ContactUs";
import Login from "@pages/Login/Login";
import PrivacyAndPolicy from "@pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "@pages/TermsAndConditions/TermsAndConditions";
import Welcome from "@pages/Welcome/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diagnostics from "./modules/diagnostics/Diagnostics";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/doctor-consultation/find-a-doctor"
          element={<FindADoctor />}
        />
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/diagnostics/package" element={<Diagnostics />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
