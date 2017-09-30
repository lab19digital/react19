import Immutable from "seamless-immutable";
import { Types, States } from "../actionTypes";

const initialState = Immutable({
  drawer_active: false
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.UI_DRAWER_OPEN:
      return {
        ...state,
        drawer_active: true
      };
    case Types.UI_DRAWER_CLOSE:
      return {
        ...state,
        drawer_active: false
      };
    default:
      return state;
  }
};
