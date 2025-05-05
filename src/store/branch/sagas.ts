import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadBranchesRequested,
  loadBranchesSuccess,
  loadBranchesFail,
  loadBranchesListRequested,
  loadBranchesListSuccess,
  loadBranchesListFail,
  storeBranchRequested,
  storeBranchSuccess,
  storeBranchFail,
  updateBranchRequested,
  updateBranchSuccess,
  updateBranchFail,
  archiveBranchRequested,
  archiveBranchSuccess,
  archiveBranchFail,
} from './branchSlice';
import toast from 'react-hot-toast';

export function* loadBranchesEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/branches?SearchValue=${
        action?.payload?.filters?.query ?? ''
      }&PaginationOption.Page=${
        action?.payload?.page
      }&PaginationOption.PageSize=${action.payload?.perPage}`
    );
    yield put(loadBranchesSuccess(data));
  } catch (error: any) {
    yield put(loadBranchesFail(error.message));
  }
}

export function* loadBranchesListEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(axiosInstance.get, `${apiURL}/branches/list`);
    yield put(loadBranchesListSuccess(data));
  } catch (error: any) {
    yield put(loadBranchesListFail(error.message));
  }
}

export function* storeBranchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/branches`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(storeBranchSuccess(data));
      toast.success('Branch created successfully');
    } else {
      toast.error('Branch create failed! ', data?.errors);
    }
  } catch (error: any) {
    yield put(storeBranchFail(error.message));
  }
}

export function* updateBranchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.put,
      `${apiURL}/branches/${action.payload?.id}`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(updateBranchSuccess(data));

      yield call(loadBranchesEffect, {
        payload: { filters: {}, perPage: 10, page: 1 },
        type: '',
      });

      toast.success('Branch edited successfully');
    } else {
      toast.error(data?.errors);
    }
  } catch (error: any) {
    yield put(updateBranchFail(error.message));
  }
}

export function* archiveBranchEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { item } = action.payload;
    const { data } = yield call(
      axiosInstance.delete,
      `${apiURL}/branches/${action.payload.item.id}`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(archiveBranchSuccess(data));
      if (item.isActive) {
        toast.success('Branch archived successfully');
      } else {
        toast.success('Branch unarchived successfully');
      }
    }
  } catch (error: any) {
    yield put(archiveBranchFail(error.message));
  }
}

export function* branchesSaga(): Generator<any, void, any> {
  yield takeEvery(loadBranchesRequested, loadBranchesEffect);
  yield takeEvery(loadBranchesListRequested, loadBranchesListEffect);
  yield takeEvery(storeBranchRequested, storeBranchEffect);
  yield takeEvery(updateBranchRequested, updateBranchEffect);
  yield takeEvery(archiveBranchRequested, archiveBranchEffect);
}
