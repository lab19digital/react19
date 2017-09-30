import { combineReducers } from "redux";
import { reducer as form } from 'redux-form'
import ui from './ui/reducer';
import login from './login/reducer';

export default combineReducers({
  ui,
  login,
  form
});
