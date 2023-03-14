import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE
} from "./constants";

export interface LoginSuccessPayload {
  data: any;
}

export interface LoginFailurePayload {
  error: string;
}

export interface Login {
  type: typeof LOGIN;
  payload: any;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

/* Register */
export interface RegisterSuccessPayload {
  data: any;
}

export interface RegisterFailurePayload {
  error: string;
}

export interface Register {
  type: typeof REGISTER;
  payload: any;
}

export type RegisterSuccess = {
  type: typeof REGISTER_SUCCESS;
  payload: RegisterSuccessPayload;
};

export type RegisterFailure = {
  type: typeof REGISTER_FAILURE;
  payload: RegisterFailurePayload;
};

export type AuthActions =
  | Login | LoginSuccess | LoginFailure
  | Register | RegisterSuccess | RegisterFailure | any;