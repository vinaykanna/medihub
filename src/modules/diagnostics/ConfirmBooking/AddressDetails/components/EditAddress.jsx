import TextField from "@components/TextField";
import CountrySwitcher from "@components/CountrySwitcher";
import { useState } from "react";
import Modal from "@components/Modal";

function EditAddress({ open, onClose }) {
  const [state, setState] = useState({
    state: "",
    city: null,
    landmark: null,
    area: "",
    pinCode: "",
  });

  return (
    <Modal isOpen={open} onClose={onClose} title="Edit Address Details">
      <div className="flex flex-col gap-6">
        <TextField
          id="state"
          placeholder="Enter state"
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
        <TextField
          id="area"
          placeholder="Enter area"
          required
          type="text"
          className="col-span-1"
          // inputClassName="pl-14"
        />
        <TextField
          id="pincode"
          placeholder="Enter pincode"
          required
          type="text"
          className="col-span-1"
        />
        <button className="bg-primary-solid text-white text-lg py-2 rounded-[40px] w-full">
          Update Address
        </button>
      </div>
    </Modal>
  );
}

export default EditAddress;
