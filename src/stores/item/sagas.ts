import { call, put, takeLatest } from "redux-saga/effects";
import {
  createItemFailure,
  createItemSuccess,
  fetchItemsFailure,
  fetchItemsSuccess
} from "./actions";
import { CREATE_ITEM, FETCH_ITEMS } from "./constants";
import request from "@/utils/request";

function* fetchItemsSaga(): any {
  try {
    const response = yield call(request, "items");
    yield put(
      fetchItemsSuccess({
        data: response
      })
    );
  } catch (e: any) {
    yield put(
      fetchItemsFailure({
        error: e ? e.response.data.message : 'Error'
      })
    );
  }
}

function* createItemSaga({ payload }: any): any {
  try {
    const response = yield call(request, "items", {
      method: "post",
      data: payload
    });
    yield put(
      createItemSuccess({
        data: response
      })
    );
  } catch (e: any) {
    yield put(
      createItemFailure({
        error: e.response.data.message
      })
    );
  }
}

function* itemSaga() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
  yield takeLatest(CREATE_ITEM, createItemSaga);
}

export default itemSaga;