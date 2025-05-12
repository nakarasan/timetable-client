import { all } from 'redux-saga/effects';
import { authSaga } from 'store/auth/sagas';
import { customersSaga } from './customers/sagas';
import { branchesSaga } from './branch/sagas';
import { subjectSaga } from './subject/sagas';
import { classSaga } from './department/sagas';
import { userSaga } from './user/sagas';
import { teachersubjectSaga } from './teacher-subject/sagas';
import { classsubjectSaga } from './class-subject/sagas';
import { timetableSaga } from './timetable/sagas';

export function* rootSaga() {
  yield all([
    authSaga(),
    customersSaga(),
    branchesSaga(),
    subjectSaga(),
    classSaga(),
    userSaga(),
    teachersubjectSaga(),
    classsubjectSaga(),
    timetableSaga(),
  ]);
}
