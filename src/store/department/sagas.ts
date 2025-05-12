import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadClassRequested,
  loadClassSuccess,
  loadClassFail,
  loadBatchRequested,
  loadBatchSuccess,
  loadBatchFail,
  storeClassRequested,
  storeClassSuccess,
  storeClassFail,
  storeBatchRequested,
  storeBatchSuccess,
  storeBatchFail,
  deleteClassRequested,
  deleteClassSuccess,
  deleteClassFail,
  deleteBatchRequested,
  deleteBatchSuccess,
  deleteBatchFail,
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

export function* loadBatchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/Batch`);
    yield put(loadBatchSuccess(data));
  } catch (error: any) {
    yield put(loadBatchFail(error.message));
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

export function* storeBatchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/Batch`,
      action.payload
    );

    if (data?.succeeded) {
      yield put(storeBatchSuccess(data));
      yield call(loadBatchEffect, {
        payload: {},
        type: '',
      });
      toast.success('Batch created successfully');
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeBatchFail(error.message));
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

export function* deleteBatchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/Batch/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(deleteBatchSuccess(data));
      yield call(loadBatchEffect, {
        payload: {},
        type: '',
      });
      toast.success('Subject deleted successfully');
    }
  } catch (error: any) {
    yield put(deleteBatchFail(error.message));
  }
}

export function* classSaga(): Generator<any, void, any> {
  yield takeEvery(loadClassRequested, loadClassEffect);
  yield takeEvery(loadBatchRequested, loadBatchEffect);
  yield takeEvery(storeClassRequested, storeClassEffect);
  yield takeEvery(storeBatchRequested, storeBatchEffect);
  yield takeEvery(deleteClassRequested, deleteClassEffect);
  yield takeEvery(deleteBatchRequested, deleteBatchEffect);
}
