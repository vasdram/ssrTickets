import { call, put, takeEvery } from 'redux-saga/effects';

import {
  autoCompleteRequest,
  getDataCitySuccess,
  getDataCityRequest
} from '../api/Autocomplete';

export function* autocompleteRequestFlow(action: any) {

  try {
    const result = yield call(autoCompleteRequest, action.payload);
    yield put(getDataCitySuccess(result));
  } catch (error) {
    console.log(error.message);
  }
}

export default function* autocompleteRequestWatcher() {
  yield takeEvery(
    getDataCityRequest.toString(),
    autocompleteRequestFlow,
  );
}