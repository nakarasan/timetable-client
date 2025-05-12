import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const timetableSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    loadTimetableRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadTimetableSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.timetable = action.payload?.result;
    },
    loadTimetableFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadTimetableByBatchRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadTimetableByBatchSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.batchTimeTable = action.payload;
    },
    loadTimetableByBatchFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadTimetableByStaffRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadTimetableByStaffSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.staffTimeTable = action.payload?.result;
    },
    loadTimetableByStaffFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    generateTimetableRequested(state, action: PayloadAction<any>) {
      state.loading = true;
      state.error = null;
    },
    generateTimetableSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.generateTimetable = action.payload;
    },
    generateTimetableFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadTimetableRequested,
  loadTimetableSuccess,
  loadTimetableFail,
  loadTimetableByBatchRequested,
  loadTimetableByBatchSuccess,
  loadTimetableByBatchFail,
  loadTimetableByStaffRequested,
  loadTimetableByStaffSuccess,
  loadTimetableByStaffFail,
  generateTimetableRequested,
  generateTimetableSuccess,
  generateTimetableFail,
} = timetableSlice.actions;

export default timetableSlice.reducer;
