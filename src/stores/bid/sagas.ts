import { call, put, takeLatest } from "redux-saga/effects";
import {
  bidFailure, bidSuccess
} from "./actions";
import { BID } from "./constants";
import request from "@/utils/request";

function* bidSaga({ payload }: any): any {
  try {
    const response = yield call(request, "bids", {
      method: "post",
      data: payload
    });
    yield put(bidSuccess({ data: response }));
  } catch (e: any) {
    yield put(bidFailure({ error: e.response.data.message }));
  }
}

function* depositSaga() {
  yield takeLatest(BID, bidSaga);

}

export default depositSaga;