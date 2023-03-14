import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getAddDepositState = (state: AppState) => state.deposit.addDeposit;
const getFetchTotalDepositState = (state: AppState) => state.deposit.fetchTotalDeposit;

export const getAddDepositSelector = createSelector(getAddDepositState, (state) => state);
export const getFetchTotalDepositSelector = createSelector(getFetchTotalDepositState, (state) => state);
