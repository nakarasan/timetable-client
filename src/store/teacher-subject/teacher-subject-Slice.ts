import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const teacherSubjectSlice = createSlice({
  name: 'teacher-subject',
  initialState,
  reducers: {
    loadTeacherSubjectsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadTeacherSubjectsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.teacherSubjects = action.payload?.result;
    },
    loadTeacherSubjectsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeTeacherSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeTeacherSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeTeacherSubject = action.payload;
    },
    storeTeacherSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteTeacherSubjectRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteTeacherSubjectSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.deleteTeacherSubject = action.payload;
    },
    deleteTeacherSubjectFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadTeacherSubjectsRequested,
  loadTeacherSubjectsSuccess,
  loadTeacherSubjectsFail,
  storeTeacherSubjectRequested,
  storeTeacherSubjectSuccess,
  storeTeacherSubjectFail,
  deleteTeacherSubjectRequested,
  deleteTeacherSubjectSuccess,
  deleteTeacherSubjectFail,
} = teacherSubjectSlice.actions;

export default teacherSubjectSlice.reducer;
