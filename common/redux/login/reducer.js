import Immutable from "seamless-immutable";
import { Types, States } from "../actionTypes";
import { handleActionError } from "../actionHelpers";

const initialState = Immutable({
  error: null,
  success: false,
  requesting: false
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return handleActionError(action, (err) => ({
        ...initialState,
        requesting: !err,
        error: err
      }));
    case Types.LOGIN_SUCCESS:
      return {
        ...initialState,
        success: true
      };
    default:
      return state;
  }
};
