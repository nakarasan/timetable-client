import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  archiveCustomerFail,
  archiveCustomerRequested,
  archiveCustomerSuccess,
  loadCustomersFail,
  loadCustomersRequested,
  loadCustomersSuccess,
  loadCustomerRequested,
  loadCustomerSuccess,
  loadCustomerFail,
  storeCustomerFail,
  storeCustomerRequested,
  storeCustomerSuccess,
  updateCustomerFail,
  updateCustomerRequested,
  updateCustomerSuccess,
  updateBlockStatusFail,
  updateBlockStatusRequested,
  updateBlockStatusSuccess,
} from './customersSlice';
import toast from 'react-hot-toast';

export function* loadCustomersEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/customers?SearchValue=${
        action?.payload?.filters?.query ?? ''
      }&PaginationOption.Page=${
        action.payload?.page
      }&PaginationOption.PageSize=${action.payload?.perPage}`
    );

    yield put(loadCustomersSuccess(data));
  } catch (error: any) {
    yield put(loadCustomersFail(error.message));
  }
}

export function* loadCustomerEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/customers/${action?.payload?.reference}`
    );
    if (data?.succeeded) {
      yield put(loadCustomerSuccess(data));
    } else {
      toast.error('Customer get failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(loadCustomerFail(error.message));
  }
}

export function* storeCustomerEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/customers`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(storeCustomerSuccess(data));
      toast.success('Customer created successfully');
    } else {
      toast.error('Customer create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeCustomerFail(error.message));
  }
}

export function* updateCustomersEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.put,
      `${apiURL}/customers/${action.payload?.reference}`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(updateCustomerSuccess(data));
      toast.success('Customer updated successfully');
    } else {
      toast.error(data?.errors);
    }
  } catch (error: any) {
    yield put(updateCustomerFail(error.message));
  }
}

export function* archiveCustomersEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/customers/${action.payload.item.id}`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(archiveCustomerSuccess(data));
      yield call(loadCustomersEffect, {
        payload: { filters: {}, perPage: 10, page: 1 },
        type: '',
      });
      toast.success('Customer archived successfully');
    }
  } catch (error: any) {
    yield put(archiveCustomerFail(error.message));
  }
}

export function* updateBlockStatusEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.put,
      `${apiURL}/customers/block/${action.payload?.reference}`
    );

    if (data?.succeeded) {
      yield put(updateBlockStatusSuccess(data));
      // toast.success("Customer blocked successfully");
    }
  } catch (error: any) {
    yield put(updateBlockStatusFail(error.message));
  }
}

export function* customersSaga(): Generator<any, void, any> {
  yield takeEvery(storeCustomerRequested, storeCustomerEffect);
  yield takeEvery(loadCustomersRequested, loadCustomersEffect);
  yield takeEvery(loadCustomerRequested, loadCustomerEffect);
  yield takeEvery(updateCustomerRequested, updateCustomersEffect);
  yield takeEvery(archiveCustomerRequested, archiveCustomersEffect);
  yield takeEvery(updateBlockStatusRequested, updateBlockStatusEffect);
}
