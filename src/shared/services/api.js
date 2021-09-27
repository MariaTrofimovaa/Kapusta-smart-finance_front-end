import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

axios.defaults.baseURL = BASE_URL;

export const fethcBriefApi = (filter) => {
  return axios
    .get(`transactions/brief`, { params: filter })
    .then(({ data }) => ({ [filter.type]: data.data.allIncomes }))
    .catch((error) => {
      throw error;
    });
};

export const addTransactionApi = async (transaction) => {
  const { data } = await axios.post("transactions/", transaction);

  return data.data;
};

export const deleteTransactionApi = (id) => {
  return axios
    .delete(`transactions/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });
};

export const setBalanceApi = (balance) => {
  return axios
    .patch(`/user/balance`, { balance: balance })
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });
};
