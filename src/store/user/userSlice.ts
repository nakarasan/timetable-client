import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadStudentsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadStudentsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.students = action.payload?.result;
    },
    loadStudentsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    // storeSubjectRequested(state, action: PayloadAction<{}>) {
    //   state.loading = true;
    //   state.error = null;
    // },
    // storeSubjectSuccess(state, action: PayloadAction<{}>) {
    //   state.loading = false;
    //   state.error = null;
    //   state.storeSubject = action.payload;
    // },
    // storeSubjectFail(state, action: PayloadAction<{}>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },

    // deleteSubjectRequested(state, action: PayloadAction<{}>) {
    //   state.loading = true;
    //   state.error = null;
    // },
    // deleteSubjectSuccess(state, action: PayloadAction<{}>) {
    //   state.loading = false;
    //   state.error = null;
    //   state.deleteCustomers = action.payload;
    // },
    // deleteSubjectFail(state, action: PayloadAction<{}>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { loadStudentsRequested, loadStudentsSuccess, loadStudentsFail } =
  userSlice.actions;

export default userSlice.reducer;
