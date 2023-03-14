import {
  LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,
  REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, RESET_AUTH
} from "./constants";

import { AuthActions } from "./types";
import { IStoreState } from "@/stores/types";

const initialState: IStoreState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload.error
      };
    case RESET_AUTH:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;