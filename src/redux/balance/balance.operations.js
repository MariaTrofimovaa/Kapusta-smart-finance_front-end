import axios from "axios";
import balanceActions from "./balance.actions";
import {store} from "../store";

const url = "http://localhost:4000/api/v1";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDRkMWY3YTlmMTA0NDNiNmViMjMwYyIsImlhdCI6MTYzMTkwMDE4Mn0.3FZIs9F8G5jgt9Ygme93vlbctkryNpzIGkq7bmxWbrE';

axios.default.baseURL = url;

const setBalanceOperation = (balance) => (dispatch) => {
  //const token=store.getState().auth.token;

  dispatch(balanceActions.addBalanceRequest());
  axios
    .patch(`${url}/user`, {balance:balance}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data.balance);
      dispatch(balanceActions.addBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(balanceActions.addBalanceError(error));
    });
};

const getBalanceOperation = () => (dispatch) => {
  //const token=store.getState().auth.token;
  
  dispatch(balanceActions.getBalanceRequest());
  axios
    .get(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(balanceActions.getBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(balanceActions.getBalanceError(error));
    });
};

const balanceOperations = {
  setBalanceOperation,
  getBalanceOperation,
};

export default balanceOperations;