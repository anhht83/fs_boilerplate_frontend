import {
  LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,
  REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, RESET_AUTH
} from "./constants";
import {
  Login, LoginFailure, LoginFailurePayload, LoginSuccess, LoginSuccessPayload,
  Register, RegisterFailure, RegisterFailurePayload, RegisterSuccess, RegisterSuccessPayload
} from "./types";

export const reset = (): any => ({
  type: RESET_AUTH
});

export const login = (payload: any): Login => ({
  type: LOGIN,
  payload
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload
});

/* Register */
export const register = (payload: any): Register => ({
  type: REGISTER,
  payload
});

export const registerSuccess = (payload: RegisterSuccessPayload): RegisterSuccess => ({
  type: REGISTER_SUCCESS,
  payload
});

export const registerFailure = (payload: RegisterFailurePayload): RegisterFailure => ({
  type: REGISTER_FAILURE,
  payload
});