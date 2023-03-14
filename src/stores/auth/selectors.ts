import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getAuthState = (state: AppState) => state.auth;

const getLoading = (state: AppState) => state.auth.loading;

const getData = (state: AppState) => state.auth.data;

const getError = (state: AppState) => state.auth.error;

export const getDataSelector = createSelector(getData, (data) => data);

export const getLoadingSelector = createSelector(getLoading, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);

const getAuthSelector = createSelector(getAuthState, (state) => state);
export default getAuthSelector;