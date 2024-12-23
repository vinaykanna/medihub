import { twJoin } from "tailwind-merge";
import TextField from "@components/TextField";
import CountrySwitcher from "@components/CountrySwitcher";
import { useState } from "react";

function AddAddress() {
  const [state, setState] = useState({
    state: "",
    city: null,
    landmark: null,
    area: "",
    pinCode: "",
  });
  return (
    <section
      className={twJoin(
        "border-[1px] border-primary-solid rounded-3xl",
        "p-7 shadow-[0px_4px_20px_0px_#E77E3A33]"
      )}
    >
      <h3 className="text-secondary-solid text-2xl font-bold font-nunito-bold">
        Add Address
      </h3>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <TextField
          id="state"
          placeholder="Enter your state"
          required
          type="text"
          className="col-span-1"
        />
        <TextField
          id="city"
          placeholder="Enter city"
          required
          type="text"
          className="col-span-1"
        />
        <TextField
          id="landmark"
          placeholder="Enter landmark"
          required
          type="text"
          className="col-span-1"
        />
      </div>
      <div className="grid grid-cols-3 mt-7 gap-5">
        <TextField
          id="area"
          placeholder="Enter Area/Stret/Sector/Road"
          required
          type="text"
          className="col-span-1"
        
          
        />
        <TextField
          id="pincode"
          placeholder="Enter PIN Code"
          required
          type="text"
          className="col-span-1"
        />
        <button className="bg-secondary-solid text-white text-lg py-1 rounded-[40px]">
          Add New Address
        </button>
      </div>
    </section>
  );
}

export default AddAddress;
