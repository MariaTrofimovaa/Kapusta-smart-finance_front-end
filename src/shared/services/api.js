import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

// Этот url использовался в addBalanceOperation в transactions.operations
// Чей он и где используется? Давайте его удалим. (Маша)
// export const url = "http://localhost:4000/api/v1/transactions";

axios.defaults.baseURL = BASE_URL;

const setParams = (params) => (axios.defaults.params = params);

// Нужно сюда вынести все запросы по примеру fethcBriefApi

// Авторизация

// Сводка
export const fethcBriefApi = ({ type, year }) => {
  setParams({ type, year });
  return axios
    .get(`transactions/brief/`)
    .then(({ data }) => ({ [type]: data.data.allIncomes }))
    .catch((error) => {
      throw error;
    });
};

// Транзакции

export const addTransactionApi = (
  startDate,
  { description, amount, category, transactionType }
) => {
  // console.log("ok");
  const transaction = {
    startDate,
    description,
    amount,
    category,
    transactionType,
  };

  return axios
    .post("transactions/", transaction)
    .then(({ data }) => ({ [data]: data.data.addedTransaction }))
    .catch((error) => {
      throw error;
    });
};

// Баланс

// Отчеты
