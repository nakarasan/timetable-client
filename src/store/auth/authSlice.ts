import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  auth: null,
  error: null,
  tokenType: "Bearer",
  selectedOption: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequested(
      state,
      action: PayloadAction<any>
    ) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.auth = action.payload;
    },

    loginFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequested(state, action: PayloadAction<any>) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.auth = action.payload.result;
    },
    registerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequested,
  loginSuccess,
  loginFailure,
  registerRequested,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
