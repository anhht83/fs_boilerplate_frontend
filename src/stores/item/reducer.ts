import {
  CREATE_ITEM,
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_SUCCESS,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  UPDATE_ITEM_BID
} from "./constants";

import { AuthActions } from "./types";
import { IStoreState } from "@/stores/types";
import storage from "@/utils/storage";

const itemsState: IStoreState = {
  loading: false,
  data: null,
  error: null
};
const itemState: IStoreState = {
  loading: false,
  data: null,
  error: null
};
const initialState = {
  item: itemsState,
  items: itemState
};

const reducer = (state = initialState, action: AuthActions) => {
  const currentUser = storage.getItem("user");
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: {
          ...state.items,
          loading: true,
          error: null
        }
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          loading: false,
          data: action.payload.data,
          error: null
        }
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        items: {
          ...state.items,
          loading: false,
          data: null,
          error: action.payload.error
        }
      };
    case CREATE_ITEM:
      return {
        ...state,
        item: {
          ...state.item,
          data: null,
          loading: true,
          error: null
        }
      };
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        item: {
          ...state.item,
          loading: false,
          data: action.payload.data,
          error: null
        }
      };
    case CREATE_ITEM_FAILURE:
      return {
        ...state,
        item: {
          ...state.item,
          loading: false,
          data: null,
          error: action.payload.error
        }
      };

    case UPDATE_ITEM_BID:
      return {
        ...state,
        items: {
          ...state.items,
          data: (state.items.data || []).map((item: any) => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                currentPrice: action.payload.amount,
                currentUserLastBidAt: currentUser && currentUser.id === action.payload.userId
                  ? action.payload.createdAt
                  : (item.currentUserLastBidAt || null)
              };
            }
            return item;
          })
        }
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;