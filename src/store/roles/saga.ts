import { put, call, takeEvery } from "redux-saga/effects";
import { axiosInstance } from "store/axios";
import {  apiURL } from "constants/url"
import toast from "react-hot-toast";

import {
  loadRoleFail,
  loadRoleRequested,
  loadRoleSuccess,
  storeRoleFail,
  storeRoleRequested,
  storeRoleSuccess,
  storePermissionRoleFail,
  storePermissionRoleRequested,
  storePermissionRoleSuccess,
  loadAllRoleWithPermissionRequested,
  loadAllRoleWithPermissionSuccess,
  loadAllRoleWithPermissionFail,
} from "./roleSlice";

export function* loadRolesEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/get-role`,
      action.payload
    );

    yield put(loadRoleSuccess(data));
  } catch (error: any) {
    yield put(loadRoleFail(error.message));
  }
}

function* storeRoleEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/create-role`,
      action.payload
    );

    if (data?.result) {
      yield put(storeRoleSuccess(data));
      yield call(loadRoleswithPermissionEffect, {
        payload: {
          pageSize: 1000,
          page: 1,
        },
        type: "",
      });
      toast.success("Role created successfully");
    } else {
      toast.error(data?.errors);
    }
  } catch (error: any) {
    yield put(storeRoleFail(error.message));
  }
}

//store permission
export function* storePermissionRoleEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/assign-permission-to-role`,
      action.payload
    );

    if (data?.result) {
      yield put(storePermissionRoleSuccess(data));
      yield call(loadRoleswithPermissionEffect, {
        payload: {
          pageSize: 1000,
          page: 1,
        },
        type: "",
      });
      toast.success("Permission assigned successfully");
    } else {
      toast.error(data?.errors);
    }
  } catch (error: any) {
    yield put(storePermissionRoleFail(error.message));
  }
}

export function* loadRoleswithPermissionEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/get-allrole-withpermission`,
      action.payload
    );

    yield put(loadAllRoleWithPermissionSuccess(data));
  } catch (error: any) {
    yield put(loadAllRoleWithPermissionFail(error.message));
  }
}

export function* rolesSaga(): Generator<any, void, any> {
  yield takeEvery(loadRoleRequested, loadRolesEffect);
  yield takeEvery(storeRoleRequested, storeRoleEffect);
  yield takeEvery(storePermissionRoleRequested, storePermissionRoleEffect);
  yield takeEvery(
    loadAllRoleWithPermissionRequested,
    loadRoleswithPermissionEffect
  );
}
