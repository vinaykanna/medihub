import { createContext, useContext, useReducer } from "react";

const OnlineConsultationContext = createContext(null);

const initialState = {
  specialization: "",
  consultationType: null,
  patients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SPECIALIZATION": {
      return { ...state, specialization: action.payload };
    }

    case "SET_CONSULTATION_TYPE": {
      return { ...state, consultationType: action.payload };
    }

    case "SELECT_PATIENT": {
      const hasPatient = state.patients?.find(
        (patient) => patient.id === action.payload.id
      );

      if (hasPatient) {
        return {
          ...state,
          patients: state.patients.filter((patient) => {
            return patient.id !== action.payload.id;
          }),
        };
      }

      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    }

    case "SET_PATIENT_SYMPTOMS": {
      return {
        ...state,
        patients: state.patients?.map((patient) => {
          if (patient.id === action.payload.patientId) {
            return {
              ...patient,
              symptoms: action.payload.symptoms,
            };
          }

          return patient;
        }),
      };
    }

    default:
      return state;
  }
};

function OnlineConsultationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OnlineConsultationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </OnlineConsultationContext.Provider>
  );
}

const useOnlineConsultationContext = () => {
  return useContext(OnlineConsultationContext);
};

export {
  OnlineConsultationContext,
  useOnlineConsultationContext,
  OnlineConsultationProvider as default,
};
