import { all } from "redux-saga/effects";
import loginSaga from './login/saga';

export default function* IndexSagas() {
  yield all([
  	loginSaga()
  ]);
}
