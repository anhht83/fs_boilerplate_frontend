import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getItemState = (state: AppState) => state.item.item;
const getItemsState = (state: AppState) => state.item.items;

export const getItemSelector = createSelector(getItemState, (state) => state);
export const getItemsSelector = createSelector(getItemsState, (state) => state);