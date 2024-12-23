import { twJoin, twMerge } from "tailwind-merge";
import editIcon from "@assets/images/edit.svg";
import deleteIcon from "@assets/images/delete.svg";
import Arrow from "@assets/icons/Arrow";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import TextField from "@components/TextField";
import { useState } from "react";
import Modal from "@components/Modal";
import EditPatient from "./EditAddress";
import { useNavigate } from "react-router-dom";
import EditAddress from "./EditAddress";

const addressData = [
  {
    id: 1,
    state: "Maharashtra",
    city: "Mumbai",
    landmark: "Gateway of India",
    area: "Colaba",
    pinCode: "400001",
  },
  {
    id: 2,
    state: "Delhi",
    city: "New Delhi",
    landmark: "India Gate",
    area: "Rajpath",
    pinCode: "110001",
  },
  {
    id: 3,
    state: "Tamil Nadu",
    city: "Chennai",
    landmark: "Marina Beach",
    area: "Triplicane",
    pinCode: "600005",
  },
  {
    id: 4,
    state: "Karnataka",
    city: "Bangalore",
    landmark: "Lalbagh Botanical Garden",
    area: "Jayanagar",
    pinCode: "560041",
  },
  {
    id: 5,
    state: "Kerala",
    city: "Kochi",
    landmark: "Marine Drive",
    area: "Ernakulam",
    pinCode: "682031",
  },
  {
    id: 6,
    state: "West Bengal",
    city: "Kolkata",
    landmark: "Victoria Memorial",
    area: "Maidan",
    pinCode: "700071",
  },
];

function ExistingAddress() {
  const { state, dispatch } = useOnlineConsultationContext();
  const navigate = useNavigate();
  const [showEditAddressModal, setshowEditAddressModal] = useState(false);
  const [selectionAddressForEdit, setSelectionAddressToEdit] = useState(null);

  const handleAddressToggle = (address) => {
    dispatch({
      type: "SELECT_ADDRESS",
      payload: address,
    });
  };

  const handleEdit = (patient) => {
    setSelectionAddressToEdit(patient);
    setshowEditAddressModal(true);
  };

  const handleDelete = (address) => {
    console.log(address);
  };

  return (
    <>
      <section className="mt-10">
        <header className="flex items-center justify-between">
          <h3 className="text-secondary-solid my-1 text-2xl font-bold font-nunito-bold">
            Select Existing Address
          </h3>
          {!!state.patient && (
            <button
              onClick={() => navigate("/diagnostics/address-details")}
              className={twJoin(
                "flex gap-4 items-center",
                "px-5 py-[6px] rounded-3xl bg-primary-solid text-white text-lg font-nunito-medium"
              )}
            >
              Continue <Arrow fill="white" />
            </button>
          )}
        </header>
        <main className="mt-5">
          {addressData.map((address, index) => (
            <Address
              key={index}
              isSelected={address.id === state.address?.id}
              onToggle={handleAddressToggle}
              addressDetails={address}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </main>
      </section>
      <EditAddress
        open={showEditAddressModal}
        onClose={() => setshowEditAddressModal(false)}
      />
    </>
  );
}

function Address({ addressDetails, isSelected, onToggle, onEdit, onDelete }) {
  return (
    <section
      className={twMerge(
        "border-[1px] border-primary-solid rounded-full",
        "px-7 py-5 shadow-[0px_4px_20px_0px_#E77E3A33] mb-8",
        isSelected && "rounded-[20px]"
      )}
    >
      <article className="flex items-center gap-5">
        <input
          onChange={() => onToggle(addressDetails)}
          type="checkbox"
          className="w-[20px] h-[20px] cursor-pointer"
          checked={isSelected}
        />
        <div className="flex-1 ">
          <h5 className="text-secondary-solid text-xl col-span-1">
            {`${addressDetails?.area}    ${addressDetails?.landmark }  ${addressDetails?.pinCode } ${addressDetails?.city } ${addressDetails?.state }`}
          </h5>
          
        </div>
        <div className="flex gap-4">
          <button onClick={() => onEdit(addressDetails)}>
            <img src={editIcon} />
          </button>
          <button onClick={() => onDelete(addressDetails)}>
            <img src={deleteIcon} />
          </button>
        </div>
      </article>
     
    </section>
  );
}

export default ExistingAddress;
