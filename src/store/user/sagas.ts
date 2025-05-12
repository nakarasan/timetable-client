import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadStudentsRequested,
  loadStudentsSuccess,
  loadStudentsFail,
  loadStaffsRequested,
  loadStaffsSuccess,
  loadStaffsFail,
  loadAdminsRequested,
  loadAdminsSuccess,
  loadAdminsFail,
  deleteStudentsRequested,
  deleteStudentsSuccess,
  deleteStudentsFail,
  deleteStaffRequested,
  deleteStaffSuccess,
  deleteStaffFail,
  deleteAdminRequested,
  deleteAdminSuccess,
  deleteAdminFail,
  loadUserRequested,
  loadUserSuccess,
  loadUserFail,
} from './userSlice';
import toast from 'react-hot-toast';

export function* loadUserEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Auth/user/${action.payload}`);
    yield put(loadUserSuccess(data));
  } catch (error: any) {
    yield put(loadUserFail(error.message));
  }
}

export function* loadStudentsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Student`);
    yield put(loadStudentsSuccess(data));
  } catch (error: any) {
    yield put(loadStudentsFail(error.message));
  }
}

export function* loadStaffsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Teacher`);
    yield put(loadStaffsSuccess(data));
  } catch (error: any) {
    yield put(loadStaffsFail(error.message));
  }
}

export function* loadAdminsEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Auth/Admins`);
    yield put(loadAdminsSuccess(data));
  } catch (error: any) {
    yield put(loadAdminsFail(error.message));
  }
}

export function* deleteStudentEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Student/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(deleteStudentsSuccess(data));
      yield call(loadStudentsEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteStudentsFail(error.message));
  }
}

export function* deleteStaffEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Teacher/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(deleteStaffSuccess(data));
      yield call(loadStaffsEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteStaffFail(error.message));
  }
}

export function* deleteAdminEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Auth/Admin/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(deleteAdminSuccess(data));
      yield call(loadAdminsEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteAdminFail(error.message));
  }
}

export function* userSaga(): Generator<any, void, any> {
  yield takeEvery(loadStudentsRequested, loadStudentsEffect);
  yield takeEvery(loadStaffsRequested, loadStaffsEffect);
  yield takeEvery(loadAdminsRequested, loadAdminsEffect);
  yield takeEvery(deleteStudentsRequested, deleteStudentEffect);
  yield takeEvery(deleteStaffRequested, deleteStaffEffect);
  yield takeEvery(deleteAdminRequested, deleteAdminEffect);
  yield takeEvery(loadUserRequested, loadUserEffect);
}
