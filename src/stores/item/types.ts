import {
  FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE,
  CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE, UPDATE_ITEM_BID
} from "./constants";

export interface FetchItemsSuccessPayload {
  data: any;
}

export interface FetchItemsFailurePayload {
  error: string;
}

export interface FetchItems {
  type: typeof FETCH_ITEMS;
}

export type FetchItemsSuccess = {
  type: typeof FETCH_ITEMS_SUCCESS;
  payload: FetchItemsSuccessPayload;
};

export type FetchItemsFailure = {
  type: typeof FETCH_ITEMS_FAILURE;
  payload: FetchItemsFailurePayload;
};

/* create Item */
export interface CreateItemSuccessPayload {
  data: any;
}

export interface CreateItemFailurePayload {
  error: string;
}

export interface CreateItem {
  type: typeof CREATE_ITEM;
  payload: any;
}

export type CreateItemSuccess = {
  type: typeof CREATE_ITEM_SUCCESS;
  payload: CreateItemSuccessPayload;
};

export type CreateItemFailure = {
  type: typeof CREATE_ITEM_FAILURE;
  payload: CreateItemFailurePayload;
};

export interface UpdateItemBid {
  type: typeof UPDATE_ITEM_BID;
  payload: any;
}


export type AuthActions =
  | FetchItems | FetchItemsSuccess | FetchItemsFailure
  | CreateItem | CreateItemSuccess | CreateItemFailure
  | UpdateItemBid;