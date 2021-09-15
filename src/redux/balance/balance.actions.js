import { createAction } from "@reduxjs/toolkit";

const addCostRequest = createAction("costs/addCostRequest");
const addCostSuccess = createAction("costs/addCostSuccess");
const addCostError = createAction("costs/addCostError");

const deleteCostRequest = createAction("costs/deleteCostRequest");
const deleteCostSuccess = createAction("costs/deleteCostSuccess");
const deleteCostError = createAction("costs/deleteCostError");

const getCostByDateRequest = createAction("costs/getCostByDateRequest");
const getCostByDateSuccess = createAction("costs/getCostByDateSuccess");
const getCostByDateError = createAction("costs/getCostByDateError");

const addProfitRequest = createAction("costs/addProfitRequest");
const addProfitSuccess = createAction("costs/addProfitSuccess");
const addProfitError = createAction("costs/addProfitError");

const deleteProfitRequest = createAction("profit/deleteProfitRequest");
const deleteProfitSuccess = createAction("profit/deleteProfitSuccess");
const deleteProfitError = createAction("profit/deleteProfitError");

const getProfitByDateRequest = createAction("costs/getProfitByDateRequest");
const getProfitByDateSuccess = createAction("costs/getProfitByDateSuccess");
const getProfitByDateError = createAction("costs/getProfitByDateError");

const addBalanceRequest = createAction("costs/addBalanceRequest");
const addBalanceSuccess = createAction("costs/addBalanceSuccess");
const addBalanceError = createAction("costs/addBalanceError");

const getBalanceRequest = createAction("costs/getBalanceRequest");
const getBalanceSuccess = createAction("costs/getBalanceSuccess");
const getBalanceError = createAction("costs/getBalanceError");

const balanceActions = {
  addCostRequest,
  addCostSuccess,
  addCostError,
  deleteCostRequest,
  deleteCostSuccess,
  deleteCostError,
  getCostByDateRequest,
  getCostByDateSuccess,
  getCostByDateError,
  addProfitRequest,
  addProfitSuccess,
  addProfitError,
  deleteProfitRequest,
  deleteProfitSuccess,
  deleteProfitError,
  getProfitByDateRequest,
  getProfitByDateSuccess,
  getProfitByDateError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
};

export default balanceActions;