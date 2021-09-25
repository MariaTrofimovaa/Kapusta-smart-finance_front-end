import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
  // googleAuthSuccess,
  // googleAuthError,
} from "./auth.actions";

const initialUserState = {
  email: null,
  id: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => ({
    email: payload.email,
    verifyToken: payload.verifyToken,
  }),

  [loginSuccess]: (_, { payload }) => ({
    email: payload.email,
    id: payload.id,
    // token: payload.token,
  }),
  // [googleAuthSuccess]: (_, { payload }) => ({
  //   email: payload.email,
  //   id: payload._id,
  //   // token: payload.token,
  // }),
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  // [googleAuthSuccess]: (_, { payload }) => payload.token,
  [registerSuccess]: () => null,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  // [googleAuthSuccess]: () => false,
  // [googleAuthError]: () => false,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const error = createReducer(null, {
  // [googleAuthError]: (_, { payload }) => payload,
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isRegistrated = createReducer(false, {
  [registerSuccess]: () => true,
});

// const isGoogleRegistrated = createReducer(false, {
//   [googleAuthSuccess]: () => true,
// });

const isAuthenticated = createReducer(false, {
  // [isGoogleRegistrated]: () => true,
  [isRegistrated]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user,
  token,
  loading,
  isAuthenticated,
  error,
});

export { authReducer };
