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

  const dispatch = useDispatch();

  // const date = "2021-09-21";

  // const expenseOfDay = useEffect(() => {
  //   dispatch(transactionsOperations.getAllExpenseOfDate(date));
  // }, []);

  // const incomeOfDay = useEffect(() => {
  //   dispatch(transactionsOperations.getAllIncomeOfDate(date));
  // }, []);

  return (
    <div>
      {/* {activeCheck === "/expences" ? expenseOfDay : incomeOfDay} */}
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
          {/* {tableTransactionsExpense && !tableTransactionsExpense.length && null} */}
          {activeCheck === "/expences"
            ? tableTransactionsExpense.map((item) => (
                <tr key={item._id} className={styles.tableTr}>
                  <td className={styles.tableDate}>{item.date}</td>
                  <td className={styles.tableDescription}>
                    {item.description}
                  </td>
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
              ))
            : tableTransactionsIncome.map((item) => (
                <tr key={item._id} className={styles.tableTr}>
                  <td className={styles.tableDate}>{item.date}</td>
                  <td className={styles.tableDescription}>
                    {item.description}
                  </td>
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
