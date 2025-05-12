import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadSubjectsRequested,
  loadSubjectsSuccess,
  loadSubjectsFail,
  storeSubjectRequested,
  storeSubjectSuccess,
  storeSubjectFail,
  deleteSubjectRequested,
  deleteSubjectSuccess,
  deleteSubjectFail,
} from './subjectSlice';
import toast from 'react-hot-toast';

export function* loadSubjectsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Subject`);
    yield put(loadSubjectsSuccess(data));
  } catch (error: any) {
    yield put(loadSubjectsFail(error.message));
  }
}

export function* storeSubjectHourEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/SubjectHour`,
      action.payload
    );
  } catch (error: any) {
    yield put(storeSubjectFail(error.message));
  }
}

export function* deleteSubjectHourEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/SubjectHour/${action.payload}`
    );
  } catch (error: any) {
    yield put(storeSubjectFail(error.message));
  }
}

export function* storeSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Subject`,
      action.payload
    );

    if (data?.succeeded) {
      yield put(storeSubjectSuccess(data));
      yield call(storeSubjectHourEffect, {
        payload: [
          {
            subjectId: data?.result?.id,
            hoursInWeek: action.payload?.hoursInWeek,
            hoursInDay: action.payload?.hoursInDay,
          },
        ],
        type: '',
      });
      yield call(loadSubjectsEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject created successfully');
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeSubjectFail(error.message));
  }
}

export function* deleteSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Subject/${action.payload?.subjectId}`
    );
    if (data?.succeeded) {
      yield put(deleteSubjectSuccess(data));
      yield call(loadSubjectsEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteSubjectFail(error.message));
  }
}

export function* subjectSaga(): Generator<any, void, any> {
  yield takeEvery(loadSubjectsRequested, loadSubjectsEffect);
  yield takeEvery(storeSubjectRequested, storeSubjectEffect);
  yield takeEvery(deleteSubjectRequested, deleteSubjectEffect);
}
