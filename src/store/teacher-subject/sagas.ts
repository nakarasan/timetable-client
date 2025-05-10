import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadTeacherSubjectsRequested,
  loadTeacherSubjectsSuccess,
  loadTeacherSubjectsFail,
  storeTeacherSubjectRequested,
  storeTeacherSubjectSuccess,
  storeTeacherSubjectFail,
  deleteTeacherSubjectRequested,
  deleteTeacherSubjectSuccess,
  deleteTeacherSubjectFail,
} from './teacher-subject-Slice';
import toast from 'react-hot-toast';

export function* loadTeacherSubjectsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/TeacherSubject`);
    yield put(loadTeacherSubjectsSuccess(data));
  } catch (error: any) {
    yield put(loadTeacherSubjectsFail(error.message));
  }
}

export function* storeTeacherSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/TeacherSubject`,
      action.payload
    );

    if (data?.succeeded) {
      yield put(storeTeacherSubjectSuccess(data));
      yield call(loadTeacherSubjectsEffect, {
        payload: {},
        type: '',
      });
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeTeacherSubjectFail(error.message));
  }
}

export function* deleteTeacherSubjectEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/TeacherSubject/${action.payload}`
    );
    yield put(deleteTeacherSubjectSuccess(data));
    yield call(loadTeacherSubjectsEffect, {
      payload: {},
      type: '',
    });
    toast.success('Subject deleted successfully');
  } catch (error: any) {
    yield put(deleteTeacherSubjectFail(error.message));
  }
}

export function* teachersubjectSaga(): Generator<any, void, any> {
  yield takeEvery(loadTeacherSubjectsRequested, loadTeacherSubjectsEffect);
  yield takeEvery(storeTeacherSubjectRequested, storeTeacherSubjectEffect);
  yield takeEvery(deleteTeacherSubjectRequested, deleteTeacherSubjectEffect);
}
