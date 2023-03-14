import { call, put, takeLatest } from "redux-saga/effects";
import {
  addDepositFailure, addDepositSuccess,
  fetchTotalDepositFailure, fetchTotalDepositSuccess
} from "./actions";
import { ADD_DEPOSIT, FETCH_TOTAL_DEPOSIT } from "./constants";
import request from "@/utils/request";

function* addDepositSaga({ payload }: any): any {
  try {
    const response = yield call(request, "deposits", {
      method: "post",
      data: payload
    });
    yield put(addDepositSuccess({ data: response }));
    yield put(fetchTotalDepositSuccess({ data: response }));
  } catch (e: any) {
    yield put(addDepositFailure({ error: e.response.data.message }));
  }
}

function* fetchTotalDepositSaga(): any {
  try {
    const response = yield call(request, "deposits/total");
    yield put(
      fetchTotalDepositSuccess({
        data: response
      })
    );
  } catch (e: any) {
    yield put(
      fetchTotalDepositFailure({
        error: e.response.data.message
      })
    );
  }
}

function* depositSaga() {
  yield takeLatest(ADD_DEPOSIT, addDepositSaga);
  yield takeLatest(FETCH_TOTAL_DEPOSIT, fetchTotalDepositSaga);

}

export default depositSaga;