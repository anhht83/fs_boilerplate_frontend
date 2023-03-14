import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./actions";
import { LOGIN, REGISTER } from "./constants";
import request from "@/utils/request";
import storage from "@/utils/storage";

function* loginSaga({ payload }: any): any {
  try {
    const response = yield call(request, "auth/login", {
      method: "post",
      data: payload
    });
    storage.setItem("user", response);
    yield put(
      loginSuccess({
        data: response
      })
    );
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.response.data.message
      })
    );
  }
}

function* registerSaga({ payload }: any): any {
  try {
    const response = yield call(request, "auth/register", {
      method: "post",
      data: payload
    });
    yield put(
      registerSuccess({
        data: response
      })
    );
  } catch (e: any) {
    yield put(
      registerFailure({
        error: e.response.data.message
      })
    );
  }
}

function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

export default authSaga;