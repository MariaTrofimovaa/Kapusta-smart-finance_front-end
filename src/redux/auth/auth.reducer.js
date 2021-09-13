import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./auth.actions";

const user = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({}),
  }
);

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => null,
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});



const auth = combineReducers({
  user,
  token,
  error,
});

export default auth;
