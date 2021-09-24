import { createAction } from "@reduxjs/toolkit";

const setBalanceRequest = createAction("balance/setBalanceRequest");
const setBalanceSuccess = createAction("balance/setBalanceSuccess");
const setBalanceError = createAction("balance/setBalanceError");


const balanceActions = {
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
};

export default balanceActions;