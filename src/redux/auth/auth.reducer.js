import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  // registerSuccess,
  // registerError,
  // loginSuccess,
  // loginError,
  authSuccess,
  authError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
  goToRegistr,
} from "./auth.actions";

const initialUserState = {
  email: null,
  username: null,
  id: null,
  userData: null,
};

const user = createReducer(initialUserState, {
  // [registerSuccess]: (_, { payload }) => payload.user,
  // [loginSuccess]: (_, { payload }) => payload.user,
  // [authSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const todaySummaryInfo = createReducer(null, {
  // [registerSuccess]: (_, { payload }) => payload.todaySummary,
  // [loginSuccess]: (_, { payload }) => payload.todaySummary,
  [authSuccess]: (_, { payload }) => payload.todaySummary,
  [logoutSuccess]: () => null,
});

const token = createReducer(null, {
  // [registerSuccess]: () => null,
  // [loginSuccess]: (_, { payload }) => payload.accessToken,
  [authSuccess]: (_, { payload }) => payload.accessToken,
  [logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  // [loginSuccess]: () => false,
  // [loginError]: () => false,
  [authSuccess]: () => false,
  [authError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  // [registerSuccess]: () => false,
  // [registerError]: () => false,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const error = createReducer(null, {
  // [registerError]: (_, { payload }) => payload,
  // [loginError]: (_, { payload }) => payload,
  [authError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isRegistrated = createReducer(false, {
  // [registerSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  // [registerError]: () => false,
  // [loginError]: () => false,
  [authError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
  [goToRegistr]: () => false,
});

const authReducer = combineReducers({
  user,
  todaySummaryInfo,
  token,
  loading,
  isRegistrated,
  error,
});

export { authReducer };
