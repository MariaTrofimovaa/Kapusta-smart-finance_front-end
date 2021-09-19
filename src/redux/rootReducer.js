import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.reducer";
import balanceReducer from "./balance/balance.reducers";

// ================ !!!!!!! Проверить что чье. Строка ниже вроде Алены
// import { transactionsReducer } from "./transactions/tranzactions.reducer";

// ================ !!!!!!! Проверить что чье. Строка ниже вроде не Алены
// import transactionsReducer from "./transactions/transactions.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  balance: balanceReducer,

  // ================ !!!!!!! Проверить что чье. Строка ниже вроде Алены
  // transactions: transactionsReducer,

  // ================ !!!!!!! Проверить что чье. Строка ниже вроде не Алены

  // transactions: transactionsReducer,

  // report,
});

export default rootReducer;
