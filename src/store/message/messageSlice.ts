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
      state.messages = action.payload;
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
      state.storeMessage = action.payload;
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
