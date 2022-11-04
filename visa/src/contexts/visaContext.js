import { createContext, useReducer } from "react";
import { RESET_ALL, SET_INID, SUBMIT_VISA_TYPE } from "../const";
import { visaReducer } from "../reducers/visaReducer";

export const visaInitialState = {
  visa_type: null,
  country_to: null,
  resident_of: null,
  source: "visachance.com",
  name: null,
};

export const VisaContext = createContext(visaInitialState);

export const VisaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(visaReducer, visaInitialState);

  function submitVisaType({ visa_type, country_to }) {
    dispatch({
      type: SUBMIT_VISA_TYPE,
      payload: { visa_type, country_to },
    });
  }

  function setInid(inid) {
    dispatch({
      type: SET_INID,
      payload: { inid },
    });
  }

  function resetAll() {
    dispatch({
      type: RESET_ALL,
    });
  }

  return (
    <VisaContext.Provider
      value={{
        visa_type: state.visa_type,
        country_to: state.country_to,
        source: state.source,
        inid: state.inid,
        submitVisaType,
        setInid,
        resetAll,
      }}
    >
      {children}
    </VisaContext.Provider>
  );
};
