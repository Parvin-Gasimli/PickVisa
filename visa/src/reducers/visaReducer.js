import { RESET_ALL, SET_INID, SUBMIT_VISA_TYPE } from "../const";
import { visaInitialState } from "../contexts/visaContext";

export const visaReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case SUBMIT_VISA_TYPE:
      return {
        ...state,
        visa_type: payload.visa_type,
        country_to: payload.country_to,
      };
    case SET_INID:
      return {
        ...state,
        inid: payload.inid,
      };
    case RESET_ALL:
      return visaInitialState;
    default:
      return state;
  }
};
