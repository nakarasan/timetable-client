import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const classSubjectSlice = createSlice({
  name: 'class-subject',
  initialState,
  reducers: {
    loadClassSubjectsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadClassSubjectsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.classSubjects = action.payload?.result;
    },
    loadClassSubjectsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeClassSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeClassSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeClassSubject = action.payload;
    },
    storeClassSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteClassSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteClassSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.deleteClassSubject = action.payload;
    },
    deleteClassSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadClassSubjectsRequested,
  loadClassSubjectsSuccess,
  loadClassSubjectsFail,
  storeClassSubjectRequested,
  storeClassSubjectSuccess,
  storeClassSubjectFail,
  deleteClassSubjectRequested,
  deleteClassSubjectSuccess,
  deleteClassSubjectFail,
} = classSubjectSlice.actions;

export default classSubjectSlice.reducer;
