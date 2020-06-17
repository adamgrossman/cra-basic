import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: undefined,
  resources: {}
};

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const { reducer, actions } = createSlice({
  name: "common",
  initialState,
  reducers: {
    fetchStart: (state, { payload }) => {
      let resources = state.resources;
      if (payload?.resource) {
        resources = { ...state.resources, [payload.resource]: FETCHING };
      }
      state.resources = resources;
    },
    fetchSuccess: (state, { payload }) => {
      let resources = state.resources;
      if (payload?.resource) {
        resources = { ...state.resources, [payload.resource]: SUCCESS };
      }
      state.resources = resources;
    },
    fetchError: (state, { payload }) => {
      let resources = state.resources;
      if (payload?.resource) {
        resources = { ...state.resources, [payload.resource]: ERROR };
      }
      state.error = payload.error;
      state.resources = resources;
    }
  }
});

export const { fetchStart, fetchSuccess, fetchError } = actions;

export default reducer;
