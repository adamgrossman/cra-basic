import { createSelector } from "reselect";

export const getCommonState = state => state.common;

export const selectCommonResource = (state, name) =>
  state.common.resources[name];

export const selectResourceEntities = (state, name) => state[name]?.entities;

export const selectResourceList = (state, name) => state[name]?.list;
