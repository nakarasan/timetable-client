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

    loadUserRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadUserSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.user = action.payload?.result;
    },
    loadUserFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadStaffsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadStaffsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.staffs = action.payload?.result;
    },
    loadStaffsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadAdminsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadAdminsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.admins = action.payload?.result;
    },
    loadAdminsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteStudentsRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteStudentsSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.deleteStudent = action.payload?.result;
    },
    deleteStudentsFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteStaffRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteStaffSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.deleteStudent = action.payload?.result;
    },
    deleteStaffFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteAdminRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteAdminSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.deleteAdmin = action.payload?.result;
    },
    deleteAdminFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadUserRequested,
  loadUserSuccess,
  loadUserFail,
  loadStudentsRequested,
  loadStudentsSuccess,
  loadStudentsFail,
  loadStaffsRequested,
  loadStaffsSuccess,
  loadStaffsFail,
  loadAdminsRequested,
  loadAdminsSuccess,
  loadAdminsFail,
  deleteStudentsRequested,
  deleteStudentsSuccess,
  deleteStudentsFail,
  deleteStaffRequested,
  deleteStaffSuccess,
  deleteStaffFail,
  deleteAdminRequested,
  deleteAdminSuccess,
  deleteAdminFail,
} = userSlice.actions;

export default userSlice.reducer;
