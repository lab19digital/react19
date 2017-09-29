import { all } from "redux-saga/effects";
import loginSaga from './login/saga';
// import dndWatcher from "./draggableList/sagas";

export default function* IndexSagas() {
  yield all([
  	loginSaga()
  ]);
}
