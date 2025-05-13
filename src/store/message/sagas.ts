import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadMessageByBatchRequested,
  loadMessageByBatchSuccess,
  loadMessageByBatchFail,
  storeMessageRequested,
  storeMessageSuccess,
  storeMessageFail,
} from './messageSlice';

export function* loadMessageByBatchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    debugger;
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/Message/batch/${action?.payload}`
    );
    yield put(loadMessageByBatchSuccess(data));
  } catch (error: any) {
    yield put(loadMessageByBatchFail(error.message));
  }
}

export function* storeMessageEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Message`,
      action.payload
    );
    yield put(storeMessageSuccess(data));
  } catch (error: any) {
    yield put(storeMessageFail(error.message));
  }
}

export function* messageSaga(): Generator<any, void, any> {
  yield takeEvery(loadMessageByBatchRequested, loadMessageByBatchEffect);
  yield takeEvery(storeMessageRequested, storeMessageEffect);
}
