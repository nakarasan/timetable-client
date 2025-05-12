import { takeLatest, put, call } from 'redux-saga/effects';
import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import toast from 'react-hot-toast';

import {
  loginRequested,
  loginSuccess,
  loginFailure,
  registerRequested,
  registerSuccess,
  registerFailure,
} from './authSlice';

function* loginEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { navigate, ...credentials } = action.payload;
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Auth/login`,
      credentials
    );

    if (data?.succeeded) {
      yield put(loginSuccess(data));
      if (data?.result?.userType === 0) {
        navigate('/students/dashboard');
      } else if (data?.result?.userType === 1) {
        navigate('/staffs/dashboard');
      } else if (data?.result?.userType === 2) {
        navigate('/');
      }
      toast.success('Login succeessfully');
    } else {
      if (data?.errors) {
        toast.error(data?.errors[0]);
      } else {
        toast.error('Login Failed');
      }
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* registerEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Auth/register`,
      action.payload
    );

    yield put(registerSuccess(data));
  } catch (error: any) {
    yield put(registerFailure(error.message));
  }
}

export function* authSaga(): Generator<any, void, any> {
  yield takeLatest(loginRequested, loginEffect);
  yield takeLatest(registerRequested, registerEffect);
}
