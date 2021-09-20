import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.reducer";
import balanceReducer from "./balance/balance.reducers";

// ================ Все вынесли в transactions
// import { transactionsReducer } from "./transactions/tranzactions.reducer";

// ================ !!!!!!! Проверить что чье. Строка ниже вроде не Алены
import transactions from "./transactions/transactions.reducer";

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
  // report,
});

export default rootReducer;
