import { twJoin } from "tailwind-merge";
import TextField from "@components/TextField";
import CountrySwitcher from "@components/CountrySwitcher";
import { useState } from "react";

function AddPatient() {
  const [state, setState] = useState({
    patientName: "",
    gender: null,
    age: null,
    countryCode: "",
    mobileNumber: "",
    relationWithPatient: "",
  });
  return (
    <section
      className={twJoin(
        "border-[1px] border-primary-solid rounded-3xl",
        "p-7 shadow-[0px_4px_20px_0px_#E77E3A33]"
      )}
    >
      <h3 className="text-secondary-solid text-2xl font-bold font-nunito-bold">
        Add Patient
      </h3>
      <div className="grid grid-cols-3 mt-5 gap-5">
        <TextField
          id="patientName"
          placeholder="Enter Patient Name"
          required
          type="text"
          className="col-span-1"
        />
        <TextField
          id="gender"
          placeholder="Enter Gender"
          required
          type="text"
          className="col-span-1"
        />
        <TextField
          id="age"
          placeholder="Enter Age"
          required
          type="number"
          className="col-span-1"
        />
      </div>
      <div className="grid grid-cols-3 mt-7 gap-5">
        <TextField
          id="patientName"
          placeholder="Mobile Number"
          required
          type="text"
          className="col-span-1"
          startIcon={
            <CountrySwitcher
              selected={state.countryCode}
              onChange={(countryCode) => {
                setState({
                  ...state,
                  countryCode,
                });
              }}
            />
          }
          inputClassName="pl-14"
        />
        <TextField
          id="relationWithPatient"
          placeholder="Enter Relation with Patient"
          required
          type="text"
          className="col-span-1"
        />
        <button className="bg-secondary-solid text-white text-lg py-1 rounded-[40px]">
          Add New Patient
        </button>
      </div>
    </section>
  );
}

export default AddPatient;
