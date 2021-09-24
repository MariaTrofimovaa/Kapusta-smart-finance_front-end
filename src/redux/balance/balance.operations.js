import axios from "axios";
import balanceActions from "./balance.actions";
import {store} from "../store";

const url = "http://localhost:4000/api/v1/user";
const getRoute = "current";
const patchRoute = "balance";

axios.default.baseURL = url;

const setBalanceOperation = (balance) => (dispatch) => {
  const token=store.getState().auth.token;

  dispatch(balanceActions.setBalanceRequest());

  axios
    .patch(`${url}/${patchRoute}`, {balance:balance}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
       dispatch(balanceActions.setBalanceSuccess(parseFloat(data.balance)));
    })
    .catch((error) => {
      dispatch(balanceActions.setBalanceError(error));
    });  
  
};


const balanceOperations = {
  setBalanceOperation
};

export default balanceOperations;