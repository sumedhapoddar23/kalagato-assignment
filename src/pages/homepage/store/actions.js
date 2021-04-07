import actionTypes from "./types";

export const fetchDataStart = (payload) => ({
  type: actionTypes.FETCH_DATA_START,
  payload,
});

export const fetchDataSuccess = (payload) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (payload) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload,
});

export const onTabDataChange = (payload) => ({
  type: actionTypes.ON_TAB_DATA_CHANGE,
  payload,
});
