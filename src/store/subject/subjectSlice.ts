import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const subjectSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    loadSubjectsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadSubjectsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.subjects = action.payload?.result;
    },
    loadSubjectsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeSubject = action.payload;
    },
    storeSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.deleteCustomers = action.payload;
    },
    deleteSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadSubjectsRequested,
  loadSubjectsSuccess,
  loadSubjectsFail,
  storeSubjectRequested,
  storeSubjectSuccess,
  storeSubjectFail,
  deleteSubjectRequested,
  deleteSubjectSuccess,
  deleteSubjectFail,
} = subjectSlice.actions;

export default subjectSlice.reducer;
