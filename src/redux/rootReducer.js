import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.reducer";
import balanceReducer from "./balance/balance.reducers";

// import balance from "./balance/balance.reducer"
import transactions from "./transactions/tranzactionsReducer";

import transactionsReducer from "./transactions/transactions.reducer";
// import report from "./report/report.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  balance: balanceReducer,
  transactions,

  transactions: transactionsReducer,

  // report,
});

export default rootReducer;
