import {
  ADD_DEPOSIT,
  ADD_DEPOSIT_SUCCESS,
  ADD_DEPOSIT_FAILURE,
  FETCH_TOTAL_DEPOSIT,
  FETCH_TOTAL_DEPOSIT_SUCCESS,
  FETCH_TOTAL_DEPOSIT_FAILURE
} from "./constants";
/* add deposit */
export interface AddDepositSuccessPayload {
  data: any;
}

export interface AddDepositFailurePayload {
  error: string;
}

export interface AddDeposit {
  type: typeof ADD_DEPOSIT;
  payload: any;
}

export type AddDepositSuccess = {
  type: typeof ADD_DEPOSIT_SUCCESS;
  payload: AddDepositSuccessPayload;
};

export type AddDepositFailure = {
  type: typeof ADD_DEPOSIT_FAILURE;
  payload: AddDepositFailurePayload;
};

/* total deposit */
export interface FetchTotalDepositSuccessPayload {
  data: any;
}

export interface FetchTotalDepositFailurePayload {
  error: string;
}

export interface FetchTotalDeposit {
  type: typeof FETCH_TOTAL_DEPOSIT;
}

export type FetchTotalDepositSuccess = {
  type: typeof FETCH_TOTAL_DEPOSIT_SUCCESS;
  payload: FetchTotalDepositSuccessPayload;
};

export type FetchTotalDepositFailure = {
  type: typeof FETCH_TOTAL_DEPOSIT_FAILURE;
  payload: FetchTotalDepositFailurePayload;
};


export type DepositActions =
  | AddDeposit | AddDepositSuccess | AddDepositFailure
  | FetchTotalDeposit | FetchTotalDepositSuccess | FetchTotalDepositFailure;