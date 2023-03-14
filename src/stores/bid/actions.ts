import { BID, BID_FAILURE, BID_SUCCESS, RESET_BID } from "./constants";
import { Bid, BidFailure, BidFailurePayload, BidSuccess, BidSuccessPayload } from "./types";

export const reset = (): any => ({
  type: RESET_BID
});

export const bid = (payload: any): Bid => ({
  type: BID,
  payload
});

export const bidSuccess = (payload: BidSuccessPayload): BidSuccess => ({
  type: BID_SUCCESS,
  payload
});

export const bidFailure = (payload: BidFailurePayload): BidFailure => ({
  type: BID_FAILURE,
  payload
});
