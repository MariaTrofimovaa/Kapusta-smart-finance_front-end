/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import IconDelete from "../../shared/iconDelete/IconDelete";
import styles from "./TableTransactions.module.css";
import {
  getExpenseOfDaySelector,
  getIncomeOfDaySelector,
} from "../../redux/transactions/transactions.selectors";
import transactionsOperations from "../../redux/transactions/transactions.operations";

const TableTransactions = () => {
  const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);
  const tableTransactionsIncome = useSelector(getIncomeOfDaySelector);

  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;
  console.log(currentLocation.pathname);
  const dispatch = useDispatch();

  const date = "2021-09-21";
  // useEffect(() => {
  //   dispatch(transactionsOperations.getAllIncomeOfDate(date));
  // }, []);

  useEffect(() => {
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, []);

  // const getTransaction = () => {
  //   if (activeCheck === "/expences")
  //     return transactionsOperations.getAllExpenseOfDate(date);
  //   return transactionsOperations.getAllIncomeOfDate(date);
  // };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadTr}>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {activeCheck === "/expences" &&
            tableTransactionsExpense.map((item) => (
              <tr key={item._id} className={styles.tableTr}>
                <td className={styles.tableDate}>{item.date}</td>
                <td className={styles.tableDescription}>{item.description}</td>
                <td className={styles.tableCategory}>{item.category}</td>
                <td className={styles.tableAmount}>{item.amount}</td>
                <td className={styles.tableDelete}>
                  <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() =>
                      dispatch(
                        transactionsOperations.deleteTransaction(item._id)
                      )
                    }
                  >
                    <IconDelete />
                  </button>
                </td>
              </tr>
            ))}
          {activeCheck === "/income" &&
            tableTransactionsIncome.map((item) => (
              <tr key={item._id} className={styles.tableTr}>
                <td className={styles.tableDate}>{item.date}</td>
                <td className={styles.tableDescription}>{item.description}</td>
                <td className={styles.tableCategory}>{item.category}</td>
                <td className={styles.tableAmount}>{item.amount}</td>
                <td className={styles.tableDelete}>
                  <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() =>
                      dispatch(
                        transactionsOperations.deleteTransaction(item._id)
                      )
                    }
                  >
                    <IconDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
