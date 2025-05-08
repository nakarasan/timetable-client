import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const ClassSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    loadClassRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadClassSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.classes = action.payload?.result;
    },
    loadClassFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeClassRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeClassSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeClass = action.payload;
    },
    storeClassFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteClassRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    deleteClassSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.deleteClass = action.payload;
    },
    deleteClassFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadClassRequested,
  loadClassSuccess,
  loadClassFail,
  storeClassRequested,
  storeClassSuccess,
  storeClassFail,
  deleteClassRequested,
  deleteClassSuccess,
  deleteClassFail,
} = ClassSlice.actions;

export default ClassSlice.reducer;
