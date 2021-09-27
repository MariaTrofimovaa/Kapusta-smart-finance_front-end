import axios from "axios";
import {
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
} from "./auth.actions";
import { alertError, alertSuccess } from "../../shared/reactAlert";

axios.defaults.baseURL = "http://localhost:4000/api/v1/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (registrationObject) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const {
      data: { data },
    } = await axios.post("/auth/signup", registrationObject);
    console.log(data);

    // Вызываем функцию registerAPI и передаем в нее registrationObject
    // const user = await registerAPI(registrationObject); - импортировать из services/api
    //     const { data } = await axios.post("/auth/signup", registrationObject);

    dispatch(registerSuccess(data));
    // dispatch(registerSuccess(user));
    alertSuccess("Регистрация прошла успешно. Войдите в свою учетную запись.");
  } catch (error) {
    if (error.response?.status === 409) {
      alertError("Пользователь с тaкой почтой уже зарегистрирован");
    }
    dispatch(registerError(error.message));
  }
};

const login = (loginObject) => async (dispatch, getState) => {
  dispatch(loginRequest());

  console.log("loginObject", loginObject);
  const authToken = getState().auth.token;

  try {
    // const { email, password } = loginObject;
    // const data = await api.logInApi({ email, password }); - импортировать из services/api
    const {
      data: { data },
    } = await axios.post("/auth/signin", loginObject);

    token.set(authToken);

    dispatch(loginSuccess(data));
    alertSuccess("Добро пожаловать");
  } catch (error) {
    if (error.response?.status === 403) {
      alertError("Неверный логин или пароль");
    }
    dispatch(loginError(error.message));
  }
};
const resetParams = () => (axios.defaults.params = {});

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    resetParams();
    // await logoutApi(); - импортировать из services/api
    await axios.get("/auth/logout");
    token.unset();

    dispatch(logoutSuccess());
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
    const { data } = await axios.get("/auth/current");
    console.log("getcurrentuserdata", data);
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(logoutSuccess());
    }
    dispatch(getCurrentUserError(error.message));
  }
};

export { token, login, register, logOut, getCurrentUser };
