import {
  CREATE_ITEM, CREATE_ITEM_FAILURE,
  CREATE_ITEM_SUCCESS,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  RESET_ITEM, UPDATE_ITEM_BID
} from "./constants";
import {
  CreateItem, CreateItemFailure, CreateItemFailurePayload, CreateItemSuccess, CreateItemSuccessPayload,
  FetchItems,
  FetchItemsFailure,
  FetchItemsFailurePayload,
  FetchItemsSuccess,
  FetchItemsSuccessPayload, UpdateItemBid
} from "./types";

export const reset = (): any => ({
  type: RESET_ITEM
});

export const fetchItems = (): FetchItems => ({
  type: FETCH_ITEMS
});

export const fetchItemsSuccess = (payload: FetchItemsSuccessPayload): FetchItemsSuccess => ({
  type: FETCH_ITEMS_SUCCESS,
  payload
});

export const fetchItemsFailure = (payload: FetchItemsFailurePayload): FetchItemsFailure => ({
  type: FETCH_ITEMS_FAILURE,
  payload
});

/* create item */
export const createItem = (payload: any): CreateItem => ({
  type: CREATE_ITEM,
  payload
});

export const createItemSuccess = (payload: CreateItemSuccessPayload): CreateItemSuccess => ({
  type: CREATE_ITEM_SUCCESS,
  payload
});

export const createItemFailure = (payload: CreateItemFailurePayload): CreateItemFailure => ({
  type: CREATE_ITEM_FAILURE,
  payload
});


export const updateItemBid = (payload: any): UpdateItemBid => ({
  type: UPDATE_ITEM_BID,
  payload
});