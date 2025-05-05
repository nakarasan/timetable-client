import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
  branches: [],
  storeBranch: {},
  branchesList: [],
};
const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    loadBranchesRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadBranchesSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.branches = action.payload?.result?.results;
      state.paginationOption = {
        page: action.payload?.result?.page,
        pageSize: action.payload?.result?.pageSize,
        totalItems: action.payload?.result?.totalItems,
        numberOfPages: action.payload?.result?.numberOfPages,
      };
    },
    loadBranchesFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    loadBranchesListRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadBranchesListSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.branchesList = action?.payload?.result;
    },
    loadBranchesListFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    storeBranchRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    storeBranchSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeBranch = action.payload;
    },
    storeBranchFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateBranchRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    updateBranchSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.updateBranch = action.payload;
    },
    updateBranchFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    archiveBranchRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    archiveBranchSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.srchiveBranch = action.payload;
    },
    archiveBranchFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadBranchesRequested,
  loadBranchesSuccess,
  loadBranchesFail,
  loadBranchesListRequested,
  loadBranchesListSuccess,
  loadBranchesListFail,
  storeBranchRequested,
  storeBranchSuccess,
  storeBranchFail,
  updateBranchRequested,
  updateBranchSuccess,
  updateBranchFail,
  archiveBranchRequested,
  archiveBranchSuccess,
  archiveBranchFail,
} = branchSlice.actions;

export default branchSlice.reducer;
