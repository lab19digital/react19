import Immutable from "seamless-immutable";
import { Types, States } from "../actionTypes";

const initialState = Immutable({
  error: null,
  success: false,
  requesting: false
});

export default (state = initialState, action = {}) => {
  const hasError = action.error;
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        requesting: !hasError,
        error: hasError && action.payload,
        success: false,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...initialState,
        success: true
      };
    default:
      return state;
  }
};
