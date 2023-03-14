import {
  ADD_DEPOSIT,
  ADD_DEPOSIT_FAILURE,
  ADD_DEPOSIT_SUCCESS,
  FETCH_TOTAL_DEPOSIT,
  FETCH_TOTAL_DEPOSIT_FAILURE,
  FETCH_TOTAL_DEPOSIT_SUCCESS,
  RESET_DEPOSIT
} from "./constants";
import {
  AddDeposit,
  AddDepositFailure,
  AddDepositFailurePayload,
  AddDepositSuccess,
  AddDepositSuccessPayload,
  FetchTotalDeposit,
  FetchTotalDepositFailure,
  FetchTotalDepositFailurePayload,
  FetchTotalDepositSuccess,
  FetchTotalDepositSuccessPayload
} from "./types";

export const reset = (): any => ({
  type: RESET_DEPOSIT
});
/* add deposit */
export const addDeposit = (payload: any): AddDeposit => ({
  type: ADD_DEPOSIT,
  payload
});

export const addDepositSuccess = (payload: AddDepositSuccessPayload): AddDepositSuccess => ({
  type: ADD_DEPOSIT_SUCCESS,
  payload
});

export const addDepositFailure = (payload: AddDepositFailurePayload): AddDepositFailure => ({
  type: ADD_DEPOSIT_FAILURE,
  payload
});

/* total deposit */
export const fetchTotalDeposit = (): FetchTotalDeposit => ({
  type: FETCH_TOTAL_DEPOSIT
});

export const fetchTotalDepositSuccess = (payload: FetchTotalDepositSuccessPayload): FetchTotalDepositSuccess => ({
  type: FETCH_TOTAL_DEPOSIT_SUCCESS,
  payload
});

export const fetchTotalDepositFailure = (payload: FetchTotalDepositFailurePayload): FetchTotalDepositFailure => ({
  type: FETCH_TOTAL_DEPOSIT_FAILURE,
  payload
});