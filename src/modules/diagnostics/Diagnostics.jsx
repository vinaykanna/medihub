import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";
import Labtests from "./Labtests/Labtests";
import Packages from "./Packages/Packages";

function Diagnostics() {
  return (
    <div className="">
      <Header className="bg-[#fbe9df]" withCart />
      <Packages />
      <Labtests />
      <Footer />
    </div>
  );
}

export default Diagnostics;
