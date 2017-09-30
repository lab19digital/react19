import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { Types } from "../actionTypes";
import { Actions } from '../actions';
import * as Api from '../../services/api';

function* createLoginRequest( action ){
  const payload = action.payload;
  try {
  	const user = yield call(Api.login, payload.username, payload.password);
    yield put(Actions.LOGIN_SUCCESS({ user: user }));
    alert(`Login success (${user.username})! See redux devtools in Chrome inspector.`);
  } catch (error) {
    console.error(`Login error! ${err}`);
    yield put(Actions.LOGIN_REQUEST( null, error ));
  }

}

export default function* watch() {
  yield takeLatest(Types.LOGIN_REQUEST, createLoginRequest);
}
