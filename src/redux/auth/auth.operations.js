import axios from "axios";
import {
  // registerRequest,
  // registerSuccess,
  // registerError,
  // loginRequest,
  // loginSuccess,
  // loginError,
  authRequest,
  authSuccess,
  authError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth.actions";
import { alertError, alertSuccess } from "../../shared/reactAlert";

axios.defaults.baseURL = "";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// const register = (registrationObject) => async (dispatch) => {
//   dispatch(registerRequest());

//   try {
//     const { data } = await axios.post("/auth/register", registrationObject);
//     dispatch(registerSuccess(data));
//     alertSuccess("Регистрация прошла успешно. Ввойдите в свою учетную запись.");
//   } catch (error) {
//     if (error.response?.status === 409) {
//       alertError("Пользователь с тaкой почтой уже зарегистрирован");
//     }
//     dispatch(registerError(error.message));
//   }
// };

const auth = (authObject) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const { data } = await axios.post("/auth/auth", authObject);
    dispatch(authSuccess(data));
    alertSuccess("Добро пожаловать");
  } catch (error) {
    if (error.response?.status === 403) {
      alertError("Неверный логин или пароль");
    }
    dispatch(authError(error.message));
  }
};

const logOut = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  const authToken = getState().auth.token;
  try {
    token.set(authToken);
    const { data } = await axios.post("/auth/logout");
    token.unset();

    dispatch(logoutSuccess(data));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("/user");
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(logoutSuccess());
    }
    dispatch(getCurrentUserError(error.message));
  }
};

export { token, auth, logOut, getCurrentUser };
