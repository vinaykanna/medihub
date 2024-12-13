// import AboutUs from "@pages/AboutUs/AboutUs.jsx";
// import ContactUs from "@pages/ContactUs/ContactUs.jsx";
// import Login from "@pages/Login/Login.jsx";
// import Welcome from "@pages/Welcome/Welcome.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import ContactUs from "./pages/ContactUs/ContactUs";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
