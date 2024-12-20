import { twJoin, twMerge } from "tailwind-merge";
import editIcon from "@assets/images/edit.svg";
import deleteIcon from "@assets/images/delete.svg";
import Arrow from "@assets/icons/Arrow";
import { useOnlineConsultationContext } from "@contexts/OnlineConsultationContext";
import TextField from "@components/TextField";
import { useState } from "react";
import EditPatient from "./EditPatient";
import { useNavigate } from "react-router-dom";

const patients = [
  {
    id: 1,
    patientName: "Jenny Wilson",
    relationWithPatient: "Mother",
    age: "25",
    gender: "Female",
    mobileNumber: "9876543210",
  },
  {
    id: 2,
    patientName: "Jenny Wilson",
    relationWithPatient: "Mother",
    age: "25",
    gender: "Female",
    mobileNumber: "9876543210",
  },
  {
    id: 3,
    patientName: "Jenny Wilson",
    relationWithPatient: "Mother",
    age: "25",
    gender: "Female",
    mobileNumber: "9876543210",
  },
  {
    id: 4,
    patientName: "Jenny Wilson",
    relationWithPatient: "Mother",
    age: "25",
    gender: "Female",
    mobileNumber: "9876543210",
  },
  {
    id: 5,
    patientName: "Jenny Wilson",
    relationWithPatient: "Mother",
    age: "25",
    gender: "Female",
    mobileNumber: "9876543210",
  },
];
function ExistingPatients() {
  const { state, dispatch } = useOnlineConsultationContext();
  const navigate = useNavigate();
  const [showEditPatientModal, setShowEditPatientModal] = useState(false);
  const [selectedPatientForEdit, setSelectedPatientForEdit] = useState(null);

  const handlePatientToggle = (patient) => {
    dispatch({
      type: "SELECT_PATIENT",
      payload: patient,
    });
  };

  const handleSymptomsChange = (patientId, symptoms) => {
    console.log(symptoms);
    dispatch({
      type: "SET_PATIENT_SYMPTOMS",
      payload: { patientId, symptoms },
    });
  };

  const handleEdit = (patient) => {
    setSelectedPatientForEdit(patient);
    setShowEditPatientModal(true);
  };

  const handleDelete = (patient) => {
    console.log(patient);
  };

  return (
    <>
      <section className="mt-10">
        <header className="flex items-center justify-between">
          <h3 className="text-secondary-solid my-1 text-2xl font-bold font-nunito-bold">
            Select Existing Patient
          </h3>
          {!!state.patients?.length > 0 && (
            <button
              onClick={() => navigate("/online-consultation/payment-details")}
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
          {patients.map((patient, index) => (
            <Patient
              key={index}
              isSelected={state?.patients?.some((p) => {
                return p?.id === patient?.id;
              })}
              onToggle={handlePatientToggle}
              patientDetails={patient}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSymptomsChange={handleSymptomsChange}
            />
          ))}
        </main>
      </section>
      <EditPatient
        open={showEditPatientModal}
        onClose={() => setShowEditPatientModal(false)}
      />
    </>
  );
}

function Patient({
  patientDetails,
  isSelected,
  onToggle,
  onSymptomsChange,
  onEdit,
  onDelete,
}) {
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
          onChange={() => onToggle(patientDetails)}
          type="checkbox"
          className="w-[20px] h-[20px] cursor-pointer"
          checked={isSelected}
        />
        <div className="flex-1 grid grid-cols-4">
          <h5 className="text-secondary-solid text-xl col-span-1">
            {patientDetails?.patientName}
          </h5>
          <h5 className="text-secondary-solid text-xl col-span-1">
            {patientDetails?.relationWithPatient}
          </h5>
          <h5 className="text-secondary-solid text-xl col-span-1">
            {patientDetails?.gender} - {patientDetails?.age}
          </h5>
          <h5 className="text-secondary-solid text-xl col-span-1">
            {patientDetails?.mobileNumber}
          </h5>
        </div>
        <div className="flex gap-4">
          <button onClick={() => onEdit(patientDetails)}>
            <img src={editIcon} />
          </button>
          <button onClick={() => onDelete(patientDetails)}>
            <img src={deleteIcon} />
          </button>
        </div>
      </article>
      {isSelected && (
        <TextField
          id="symptoms"
          placeholder="Enter your issues/symptoms here"
          required
          type="text"
          className="mt-5"
          // value={patientDetails?.symptoms || ""}
          onChange={(e) => onSymptomsChange(patientDetails?.id, e.target.value)}
        />
      )}
    </section>
  );
}

export default ExistingPatients;
