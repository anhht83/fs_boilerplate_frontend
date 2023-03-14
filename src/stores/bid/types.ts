import {
  BID,
  BID_SUCCESS,
  BID_FAILURE, RESET_BID
} from "./constants";

export interface BidSuccessPayload {
  data: any;
}

export interface BidFailurePayload {
  error: string;
}

export interface Bid {
  type: typeof BID;
  payload: any;
}

export type BidSuccess = {
  type: typeof BID_SUCCESS;
  payload: BidSuccessPayload;
};

export type BidFailure = {
  type: typeof BID_FAILURE;
  payload: BidFailurePayload;
};

export type ResetBid = {
  type: typeof RESET_BID;
};


export type DepositActions =
  | Bid | BidSuccess | BidFailure | ResetBid;
