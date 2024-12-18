import { createContext, useContext, useReducer } from "react";

const OnlineConsultationContext = createContext(null);

const initialState = {
  specialization: "",
  consultationType: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SPECIALIZATION":
      return { ...state, specialization: action.payload };
    case "SET_CONSULTATION_TYPE":
      return { ...state, consultationType: action.payload };
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
