import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  // fetchBriefRequest,
  fetchBriefSuccess,
  fetchBriefError,
} from "./tranzactionsActions";

const brief = createReducer([], {
  // [fetchBriefRequest]: () => false,
  [fetchBriefSuccess]: (_, { payload }) => payload,
  [fetchBriefError]: () => false,
});

export default combineReducers({
  brief,
});
