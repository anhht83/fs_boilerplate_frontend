import { BID, BID_FAILURE, BID_SUCCESS, RESET_BID } from "./constants";

import { DepositActions } from "./types";
import { IStoreState } from "@/stores/types";

const bidState: IStoreState = {
  loading: false,
  data: null,
  error: null
};


const initialState = {
  bid: bidState
};

const reducer = (state = initialState, action: DepositActions) => {
  switch (action.type) {
    case BID:
      return {
        ...state,
        bid: {
          ...state.bid,
          data: null,
          loading: true,
          error: null
        }
      };
    case BID_SUCCESS:
      return {
        ...state,
        bid: {
          ...state.bid,
          loading: false,
          data: action.payload.data,
          error: null
        }
      };
    case BID_FAILURE:
      return {
        ...state,
        bid: {
          ...state.bid,
          loading: false,
          data: null,
          error: action.payload.error
        }
      };
    case RESET_BID:
      return {
        ...state,
        bid: { ...initialState.bid }
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;