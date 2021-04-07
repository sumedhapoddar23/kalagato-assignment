import { takeLatest, put } from "redux-saga/effects";
import actionTypes from "./types";
import authApi from "../../../utils/authApi";
import { fetchDataFailure, fetchDataSuccess } from "./actions";
import urls from "./urls";

export function* fetchData(action) {
  const url = urls.fetchData();
  try {
    const response = yield authApi.post(url, { code: action.payload.code });
    if (response.data) {
      yield put(fetchDataSuccess(response.data));
    }
  } catch (e) {
    yield put(fetchDataFailure(e.message));
  }
}

export function* homepageSaga() {
  yield takeLatest(actionTypes.FETCH_DATA_START, fetchData);
}
