import TextField from "@components/TextField";
import CountrySwitcher from "@components/CountrySwitcher";
import { useState } from "react";
import Modal from "@components/Modal";

function EditPatient({ open, onClose }) {
  const [state, setState] = useState({
    patientName: "",
    gender: null,
    age: null,
    countryCode: "",
    mobileNumber: "",
    relationWithPatient: "",
  });

  return (
    <Modal isOpen={open} onClose={onClose} title="Edit Patient Details">
      <div className="flex flex-col gap-6">
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
        <button className="bg-primary-solid text-white text-lg py-2 rounded-[40px] w-full">
          Update Patient Details
        </button>
      </div>
    </Modal>
  );
}

export default EditPatient;
