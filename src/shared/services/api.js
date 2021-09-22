import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

// Этот url использовался в addBalanceOperation в transactions.operations
// Чей он и где используется? Давайте его удалим. (Маша)
// export const url = "http://localhost:4000/api/v1/transactions";

axios.defaults.baseURL = BASE_URL;

// const resetParams = () => (axios.defaults.params = {});

// Нужно сюда вынести все запросы по примеру fethcBriefApi

// // Регистрация
// export const registerApi = (registrationObject) => {
//   return axios
//     .post("/auth/signup", registrationObject)
//     .then()
//     .catch((error) => {
//       throw error;
//     });
// };

// // Логинизация
// export const logInApi = (loginObject) => {
//   return axios
//     .post("/auth/signin", loginObject)
//     .then()
//     .catch((error) => {
//       throw error;
//     });
// };

// // Логаут
// export const logoutApi = () => {
//   return axios
//     .post("/auth/logout")
//     .then()
//     .catch((error) => {
//       throw error;
//     });
// };

// Сводка - Таня
export const fethcBriefApi = (filter) => {

  return axios
    .get(`transactions/brief`, { params: filter })
    .then(({ data }) => ({ [filter.type]: data.data.allIncomes }))
    .catch((error) => {
      throw error;
    });
};

// Транзакции - добавление - Алена
export const addTransactionApi = async (transaction) => {
  const { data } = await axios.post("transactions/", transaction);
  console.log("data :>> ", data.data.addedTransaction);
  return data.data.addedTransaction;
};

// Транзакции - удаление - Руслан
export const deleteTransactionApi = (objId) => {
  return axios
    .delete(`transactions/${objId}`)
    .then()
    .catch((error) => {
      throw error;
    });
};

// Баланс - Света
export const fetchBalanceApi = (balance) => {
  axios
    .patch(`/user`, { balance: balance })
    .then(({ data }) => ({ [data]: data.balance }))
    .catch((error) => {
      throw error;
    });
};

// Отчеты
