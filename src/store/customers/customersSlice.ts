import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  error: null,
  customers: [],
  customer: [],
  storeCustomers: {},
};
const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    loadCustomersRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadCustomersSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.customers = action.payload?.result?.results;
      state.paginationOption = {
        page: action.payload?.result?.page,
        pageSize: action.payload?.result?.pageSize,
        totalItems: action.payload?.result?.totalItems,
        numberOfPages: action.payload?.result?.numberOfPages,
      };
    },
    loadCustomersFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    loadCustomerRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadCustomerSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.customer = action?.payload?.result;
    },
    loadCustomerFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },

    storeCustomerRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeCustomerSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeCustomers = action.payload;
    },
    storeCustomerFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateCustomerRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    updateCustomerSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.updateCustomers = action.payload;
    },
    updateCustomerFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    archiveCustomerRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    archiveCustomerSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.deleteCustomers = action.payload;
    },
    archiveCustomerFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateBlockStatusRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    updateBlockStatusSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.updateBlockStatus = action.payload;
    },

    updateBlockStatusFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadCustomersRequested,
  loadCustomersSuccess,
  loadCustomersFail,
  loadCustomerRequested,
  loadCustomerSuccess,
  loadCustomerFail,
  storeCustomerRequested,
  storeCustomerSuccess,
  storeCustomerFail,
  updateCustomerRequested,
  updateCustomerSuccess,
  updateCustomerFail,
  archiveCustomerRequested,
  archiveCustomerSuccess,
  archiveCustomerFail,
  updateBlockStatusRequested,
  updateBlockStatusSuccess,
  updateBlockStatusFail,
} = customersSlice.actions;

export default customersSlice.reducer;
