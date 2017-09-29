import { combineReducers } from "redux";
import { reducer as form } from 'redux-form'
import login from './login/reducer';

export default combineReducers({
  login,
  form
});
