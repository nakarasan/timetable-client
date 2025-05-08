import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadClassRequested,
  loadClassSuccess,
  loadClassFail,
  storeClassRequested,
  storeClassSuccess,
  storeClassFail,
  deleteClassRequested,
  deleteClassSuccess,
  deleteClassFail,
} from './classSlice';
import toast from 'react-hot-toast';

export function* loadClassEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Class`);
    yield put(loadClassSuccess(data));
  } catch (error: any) {
    yield put(loadClassFail(error.message));
  }
}

export function* storeClassEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Class`,
      action.payload
    );
    console.log('dddd', data);

    if (data?.succeeded) {
      yield put(storeClassSuccess(data));
      yield call(loadClassEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject created successfully');
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeClassFail(error.message));
  }
}

export function* deleteClassEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Class/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(deleteClassSuccess(data));
      yield call(loadClassEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteClassFail(error.message));
  }
}

export function* classSaga(): Generator<any, void, any> {
  yield takeEvery(loadClassRequested, loadClassEffect);
  yield takeEvery(storeClassRequested, storeClassEffect);
  yield takeEvery(deleteClassRequested, deleteClassEffect);
}
