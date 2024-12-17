import React from "react";
import Packages from "./Packages/Packages";
import Labtests from "./Labtests/Labtests";
import Footer from "@components/Footer";
import Header from "@components/Header";
import ConfirmBooking from "./ConfirmBooking/ConfirmBooking";
import PackagesDetails from "./Packages/components/PackagesDetails";

function Diagnostics() {
  return (
    <div className="">
      <Header className="bg-[#fbe9df]" withCart />
      <Packages />
      <Labtests />
      {/* <PackagesDetails/> */}
      {/* <ConfirmBooking/> */}
      <Footer />
    </div>
  );
}

export default Diagnostics;
