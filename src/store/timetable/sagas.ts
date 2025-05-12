import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadTimetableRequested,
  loadTimetableSuccess,
  loadTimetableFail,
  loadTimetableByBatchRequested,
  loadTimetableByBatchSuccess,
  loadTimetableByBatchFail,
  loadTimetableByStaffRequested,
  loadTimetableByStaffSuccess,
  loadTimetableByStaffFail,
  generateTimetableRequested,
  generateTimetableSuccess,
  generateTimetableFail,
} from './timetableSlice';
import toast from 'react-hot-toast';

export function* loadTimetableEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/TimeTable/Generate?isGenerate=false`
    );
    yield put(loadTimetableSuccess(data));
  } catch (error: any) {
    yield put(loadTimetableFail(error.message));
  }
}

export function* loadTimetableByBatchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/TimeTable/ByBatch/${action?.payload}?export=false`
    );
    yield put(loadTimetableByBatchSuccess(data));
  } catch (error: any) {
    yield put(loadTimetableByBatchFail(error.message));
  }
}

export function* loadTimetableByStaffEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/TimeTable/Generate?isGenerate=false`
    );
    yield put(loadTimetableByStaffSuccess(data));
  } catch (error: any) {
    yield put(loadTimetableByStaffFail(error.message));
  }
}

export function* generateTimetableEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/TimeTable/Generate`,
      action.payload
    );
    console.log('dddd', data);

    yield put(generateTimetableSuccess(data));
     yield call(loadTimetableByBatchEffect, {
       payload: {},
       type: '',
     });
    toast.success('Subject created successfully');
  } catch (error: any) {
    yield put(generateTimetableFail(error.message));
  }
}

export function* timetableSaga(): Generator<any, void, any> {
  yield takeEvery(generateTimetableRequested, generateTimetableEffect);
  yield takeEvery(loadTimetableRequested, loadTimetableEffect);
  yield takeEvery(loadTimetableByBatchRequested, loadTimetableByBatchEffect);
  yield takeEvery(loadTimetableByStaffRequested, loadTimetableByStaffEffect);
}
