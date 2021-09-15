import axios from "axios";
import balanceActions from "./balance.actions";


const url = "http://localhost:3001/api";

axios.default.baseURL = url;

const addCostOperation = (data, jwt) => (dispatch) => {
  dispatch(balanceActions.addCostRequest());
  axios
    .post(`${url}/costs/add`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => dispatch(balanceActions.addCostSuccess(data)))
    .catch((error) => dispatch(balanceActions.addCostError(error)));
};

const deleteCostOperation = (cost, jwt) =>
  function modal(dispatch) {
    dispatch(balanceActions.deleteCostRequest());
    axios
      .delete(`${url}/costs/${cost.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(({ data }) =>
        dispatch(
          balanceActions.deleteCostSuccess({ id: cost.id, balance: data.balance })
        )
      )
      .catch((error) => {
        dispatch(balanceActions.deleteCostError(error));
      });
  };

const getDateCostCalendar = (data, jwt) => (dispatch) => {
  dispatch(balanceActions.getCostByDateRequest());
  console.log(data);
  axios
    .get(`${url}/costs/date/${data}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      dispatch(balanceActions.getCostByDateSuccess(data));
    })
    .catch((error) => dispatch(balanceActions.getCostByDateError(error)));
};
const getDateProfitCalendar = (data, jwt) => (dispatch) => {
  dispatch(balanceActions.getProfitByDateRequest());
  axios
    .get(`${url}/profit/date/${data}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      dispatch(balanceActions.getProfitByDateSuccess(data));
    })
    .catch((error) => dispatch(balanceActions.getProfitByDateError(error)));
};

const addProfitOperation = (data, jwt) => (dispatch) => {
  dispatch(balanceActions.addProfitRequest());
  axios
    .post(`${url}/profit/add`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      dispatch(balanceActions.addProfitSuccess(data));
    })
    .catch((error) => {
      dispatch(balanceActions.addProfitError(error));
    });
};

const deleteProfitOperation = (profit, jwt) => (dispatch) => {
  dispatch(balanceActions.deleteProfitRequest());
  axios
    .delete(`${url}/profit/${profit.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) =>
      dispatch(
        balanceActions.deleteProfitSuccess({ id: profit.id, balance: data.balance })
      )
    )
    .catch((error) => {
      dispatch(balanceActions.deleteProfitError(error));
    });
};

const setBalanceOperation = (data, jwt) => (dispatch) => {
  dispatch(balanceActions.addBalanceRequest());
  axios
    .patch(`${url}/balance`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      dispatch(balanceActions.addBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(balanceActions.addBalanceError(error));
    });
};

const getBalanceOperation = (jwt) => (dispatch) => {
  dispatch(balanceActions.getBalanceRequest());
  axios
    .get(`${url}/balance`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(balanceActions.getBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(balanceActions.getBalanceError(error));
    });
};

export default {
  addCostOperation,
  deleteCostOperation,
  getDateCostCalendar,
  addProfitOperation,
  deleteProfitOperation,
  getDateProfitCalendar,
  setBalanceOperation,
  getBalanceOperation,
};