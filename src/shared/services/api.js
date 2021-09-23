import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

axios.defaults.baseURL = BASE_URL;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

// Сюда нужно вынести все запросы

// // Регистрация (это набросок)
// export const registerAPI = async (registrationObject) =>
//   (await axios.post("/auth/signup", registrationObject)).data.data;

// // Логинизация (это набросок)
// export const logInApi = async (loginObject) =>
//   (await axios.post("/auth/login", loginObject)).data.data;

// // Логаут (это набросок)
// export const logoutApi = async (credentials) =>
//   (await axios.post("/auth/logout", credentials)).data.data;

// Данные о пользователе (это набросок)
// export const getCurrentUserApi = () => {}

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
  // console.log("data :>> ", data.data.addedTransaction);
  return data.data; // Света: бекенд нам будет присылать как добавленную транзакцию, так и данные по балансу, которые нужно будет передать в баланс редюсер. Потому апи должен возвращать весь ответ от сервера, а разбирать его уже будем в конкретных редюсерах
};

// Транзакции - удаление - Руслан
export const deleteTransactionApi = (id) => {
  return axios
    .delete(`transactions/${id}`)
    .then()
    .catch((error) => {
      throw error;
    });
};

// Баланс - Света (это набросок)
// export const fetchBalanceApi = (balance) => {
//   axios
//     .patch(`/user`, { balance: balance })
//     .then(({ data }) => ({ [data]: data.balance }))
//     .catch((error) => {
//       throw error;
//     });
// };

// export const getBalanceOperationApi = () => {}

// Отчеты Максим  (это набросок)
//  export const getAllExpensesOfMonthApi =() => {}