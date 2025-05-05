// src/store/rootSaga.ts
import { all } from "redux-saga/effects";
import { authSaga } from "store/auth/sagas";
import { customersSaga } from "./customers/sagas";
import { branchesSaga } from "./branch/sagas";
import { rolesSaga } from "./roles/saga";


export function* rootSaga() {
  yield all([
    authSaga(),
    customersSaga(),
    branchesSaga(),
    rolesSaga(),
  ]);
}
