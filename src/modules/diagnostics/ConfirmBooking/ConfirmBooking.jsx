import React from "react";
import BookingHeader from "@components/BookingHeader";
import Tabs from "@components/Tabs";
import Header from "@components/Header";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];
  console.log(location.pathname.split("/").reverse()[0]);

  return (
    <div>
      <Header className="bg-[#fbe9df]" withCart />
      <div className="px-24 flex bg-gradient-to-b from-[#fbe5d8] to-white pt-6">
        <BookingHeader />
      </div>
      <div className="px-20 mt-20 mb-10">
        <Tabs
          tabItems={[
            {
              id: "preferences",
              title: "Preference Selection",
            },
            {
              id: "patient-details",
              title: "Add Patient",
            },
            // {
            //     id: "address-details",
            //     title: "Select Address",
            // },
            {
              id: "payment-details",
              title: "Payment",
            },
          ]}
          onClick={(tabItem) => {
            navigate(`/diagnostics/${tabItem?.id}`);
          }}
          active={active}
        />
      </div>
    </div>
  );
}

export default ConfirmBooking;
