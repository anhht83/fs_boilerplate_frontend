import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import itemSaga from "./item/sagas";
import depositSaga from "./deposit/sagas";
import bidSaga from "./bid/sagas";

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(itemSaga),
    fork(depositSaga),
    fork(bidSaga)
  ]);
}