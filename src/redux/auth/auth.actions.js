import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

// const getUserInfoRequest = createAction("auth/getUserInfoRequest");
// const getUserInfoSuccess = createAction("auth/getUserInfoSuccess");
// const getUserInfoError = createAction("auth/getUserInfoError");
// const goToRegistr = createAction("auth/goToRegistr");

// updateBalance

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  // getUserInfoRequest,
  // getUserInfoSuccess,
  // getUserInfoError,
  // goToRegistr,
};
