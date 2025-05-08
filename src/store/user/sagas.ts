import { axiosInstance } from 'store/axios';
import { apiURL } from 'constants/url';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadStudentsRequested,
  loadStudentsSuccess,
  loadStudentsFail,
} from './userSlice';

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



export function* userSaga(): Generator<any, void, any> {
  yield takeEvery(loadStudentsRequested, loadStudentsEffect);

}
