import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getBidState = (state: AppState) => state.bid.bid;

export const getBidSelector = createSelector(getBidState, (state) => state);
