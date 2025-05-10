import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadClassSubjectsRequested,
  loadClassSubjectsSuccess,
  loadClassSubjectsFail,
  storeClassSubjectRequested,
  storeClassSubjectSuccess,
  storeClassSubjectFail,
  deleteClassSubjectRequested,
  deleteClassSubjectSuccess,
  deleteClassSubjectFail,
} from './class-subject-Slice';
import toast from 'react-hot-toast';

export function* loadClassSubjectsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/Class/ClassSubjects`
    );
    yield put(loadClassSubjectsSuccess(data));
  } catch (error: any) {
    yield put(loadClassSubjectsFail(error.message));
  }
}

export function* storeClassSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Class/AddSubjectsToClass`,
      action.payload
    );

    if (data?.succeeded) {
      yield put(storeClassSubjectSuccess(data));
      yield call(loadClassSubjectsEffect, {
        payload: {},
        type: '',
      });
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeClassSubjectFail(error.message));
  }
}

export function* deleteClassSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Class/ClassSubjects?classId=${action.payload?.classId}&subjectId=${action.payload?.subjectId}`
    );
    yield put(deleteClassSubjectSuccess(data));
    yield call(loadClassSubjectsEffect, {
      payload: {},
      type: '',
    });
    toast.success('Subject deleted successfully');
  } catch (error: any) {
    yield put(deleteClassSubjectFail(error.message));
  }
}

export function* classsubjectSaga(): Generator<any, void, any> {
  yield takeEvery(loadClassSubjectsRequested, loadClassSubjectsEffect);
  yield takeEvery(storeClassSubjectRequested, storeClassSubjectEffect);
  yield takeEvery(deleteClassSubjectRequested, deleteClassSubjectEffect);
}
