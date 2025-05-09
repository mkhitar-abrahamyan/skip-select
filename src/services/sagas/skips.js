import { call, put, takeLatest } from 'redux-saga/effects';

import { getSkipsByLocationApi } from '../api/skips';
import { actionTypes } from '../actions/skips';

export function* getSkips(params) {
  try {
    const { postcode } = params.payload;
    const data = yield call(getSkipsByLocationApi, postcode);

    if (data?.length) {
      yield put({
        type: actionTypes.GET_SKIPS_BY_LOCATION_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: actionTypes.GET_SKIPS_BY_LOCATION_FAIL,
        error: 'No skips found for the given postcode.',
      });
    }
  } catch (e) {
    console.error('Failed to fetch skips:', e);
    yield put({
      type: actionTypes.GET_SKIPS_BY_LOCATION_FAIL,
      error: e.message || 'Operation failed',
    });
  }
}

export default function* skipsSaga() {
  yield takeLatest(actionTypes.GET_SKIPS_BY_LOCATION_REQUEST, getSkips);
}
