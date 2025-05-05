import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  error: null,
  roles: [],
  storeRole: {},
  storePermission: {},
  rolesWithPermission: [],
};

const RolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    //load role
    loadRoleRequested(
      state,
      action: PayloadAction<{ page: number; pageSize: number }>
    ) {
      state.loading = true;
      state.error = null;
    },
    loadRoleSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.roles = action.payload.result;
    },
    loadRoleFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload.result;
    },
    //store role
    storeRoleRequested(
      state,
      action: PayloadAction<{
        roleName: string;
        description: string;
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    storeRoleSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.storeRole = action.payload;
    },

    storeRoleFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    //store permission to role
    storePermissionRoleRequested(
      state,
      action: PayloadAction<{
        roleId: number;
        permissionId: [];
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    storePermissionRoleSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.storePermission = action.payload.result;
    },

    storePermissionRoleFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // load all roles with permission
    loadAllRoleWithPermissionRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadAllRoleWithPermissionSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.rolesWithPermission = action.payload.result;
    },

    loadAllRoleWithPermissionFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadRoleFail,
  loadRoleRequested,
  loadRoleSuccess,
  storeRoleFail,
  storeRoleRequested,
  storeRoleSuccess,
  storePermissionRoleFail,
  storePermissionRoleRequested,
  storePermissionRoleSuccess,
  loadAllRoleWithPermissionRequested,
  loadAllRoleWithPermissionSuccess,
  loadAllRoleWithPermissionFail,
} = RolesSlice.actions;

export default RolesSlice.reducer;
