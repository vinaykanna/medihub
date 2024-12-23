import { createContext, useContext, useReducer } from "react";

const PackageBookingContext = createContext(null);

const initialState = {
  visitType:'',
  preferance: {
    location:'',
    pin:'',
    clinic:'',
    timeSlot:''
  },
  address:{
    state:'',
    city:'',
    landmark:'',
    area:'',
    pinCode:''
  },
  patients: [],
  payment:''
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PREFERANCE": {
        return { ...state, preferance: {
          ...state.preferance,
          ...action.payload
        } };
      }

    case "SET_ADDRESS": {
      return { ...state, preferance: {
        ...state.address,
        ...action.payload
      } };
    }

    case "SET_VISIT_TYPE": {
      return { ...state, visitType: action.payload };
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

    default:
      return state;
  }
};

function PackageBookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PackageBookingContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PackageBookingContext.Provider>
  );
}

const usePackageBookingContext = () => {
  return useContext(PackageBookingContext);
};

export {
  PackageBookingContext,
  usePackageBookingContext,
  PackageBookingProvider as default,
};
