import Packages from "@modules/diagnostics/Packages/Packages";
import AboutUs from "@pages/AboutUs/AboutUs";
import ContactUs from "@pages/ContactUs/ContactUs";
import Login from "@pages/Login/Login";
import Welcome from "@pages/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/packages" element={<Packages />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
