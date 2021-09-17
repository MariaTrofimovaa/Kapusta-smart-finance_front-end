import { createAction } from "@reduxjs/toolkit";

const addBalanceRequest = createAction("costs/addBalanceRequest");
const addBalanceSuccess = createAction("costs/addBalanceSuccess");
const addBalanceError = createAction("costs/addBalanceError");

const getBalanceRequest = createAction("costs/getBalanceRequest");
const getBalanceSuccess = createAction("costs/getBalanceSuccess");
const getBalanceError = createAction("costs/getBalanceError");

const balanceActions = {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
};

export default balanceActions;