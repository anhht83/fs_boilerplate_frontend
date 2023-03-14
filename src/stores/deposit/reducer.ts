import {
  ADD_DEPOSIT,
  ADD_DEPOSIT_FAILURE,
  ADD_DEPOSIT_SUCCESS,
  FETCH_TOTAL_DEPOSIT,
  FETCH_TOTAL_DEPOSIT_FAILURE,
  FETCH_TOTAL_DEPOSIT_SUCCESS
} from "./constants";

import { DepositActions } from "./types";
import { IStoreState } from "@/stores/types";

const addDepositState: IStoreState = {
  loading: false,
  data: null,
  error: null
};

const fetchTotalDepositState: IStoreState = {
  loading: false,
  data: null,
  error: null
};


const initialState = {
  addDeposit: addDepositState,
  fetchTotalDeposit: fetchTotalDepositState
};

const reducer = (state = initialState, action: DepositActions) => {
  switch (action.type) {
    case ADD_DEPOSIT:
      return {
        ...state,
        addDeposit: {
          ...state.addDeposit,
          data: null,
          loading: true,
          error: null
        }
      };
    case ADD_DEPOSIT_SUCCESS:
      return {
        ...state,
        addDeposit: {
          ...state.addDeposit,
          loading: false,
          data: action.payload.data,
          error: null
        }
      };
    case ADD_DEPOSIT_FAILURE:
      return {
        ...state,
        addDeposit: {
          ...state.addDeposit,
          loading: false,
          data: null,
          error: action.payload.error
        }
      };
      /* fetch total deposit */
    case FETCH_TOTAL_DEPOSIT:
      return {
        ...state,
        fetchTotalDeposit: {
          ...state.fetchTotalDeposit,
          data: null,
          loading: true,
          error: null
        }
      };
    case FETCH_TOTAL_DEPOSIT_SUCCESS:
      return {
        ...state,
        fetchTotalDeposit: {
          ...state.fetchTotalDeposit,
          loading: false,
          data: action.payload.data,
          error: null
        }
      };
    case FETCH_TOTAL_DEPOSIT_FAILURE:
      return {
        ...state,
        fetchTotalDeposit: {
          ...state.fetchTotalDeposit,
          loading: false,
          data: null,
          error: action.payload.error
        }
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;