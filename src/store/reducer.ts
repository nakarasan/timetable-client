import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PURGE } from 'redux-persist';
import authReducer from 'store/auth/authSlice';
import customerReducer from 'store/customers/customersSlice';
import branchReducer from 'store/branch/branchSlice';
import subjectReducer from 'store/subject/subjectSlice';
import classReducer from 'store/department/classSlice';
import persistConfig from './persist';
const appReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  customer: customerReducer,
  branch: branchReducer,
  subject: subjectReducer,
  class: classReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
