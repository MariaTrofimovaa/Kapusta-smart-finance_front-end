import { createAction } from "@reduxjs/toolkit";

const setBalanceRequest = createAction("balance/setBalanceRequest");
const setBalanceSuccess = createAction("balance/setBalanceSuccess");
const setBalanceError = createAction("balance/setBalanceError");

const getBalanceRequest = createAction("balance/getBalanceRequest");
const getBalanceSuccess = createAction("balance/getBalanceSuccess");
const getBalanceError = createAction("balance/getBalanceError");

const balanceActions = {
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
};

export default balanceActions;