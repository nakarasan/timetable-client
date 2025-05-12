import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
};
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    loadMessageByBatchRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadMessageByBatchSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.subjects = action.payload?.result;
    },
    loadMessageByBatchFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeMessageRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeMessageSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeSubject = action.payload;
    },
    storeMessageFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadMessageByBatchRequested,
  loadMessageByBatchSuccess,
  loadMessageByBatchFail,
  storeMessageRequested,
  storeMessageSuccess,
  storeMessageFail,
} = messageSlice.actions;

export default messageSlice.reducer;
