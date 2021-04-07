import { all, call } from "redux-saga/effects";
import { homepageSaga } from "../pages/homepage/store/sagas";

export default function* rootSaga() {
  yield all([call(homepageSaga)]);
}
