import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "@pages/Welcome/Welcome";
import AboutUs from "@pages/AboutUs/AboutUs";
import Login from "@pages/Login/Login";
import ContactUs from "@pages/ContactUs/ContactUs";
import TermsAndConditions from "@pages/TermsAndConditions/TermsAndConditions";
import PrivacyAndPolicy from "@pages/PrivacyAndPolicy/PrivacyAndPolicy";
import Packages from "./modules/diagnostics/Packages/Packages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/packages" element={<Packages />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
