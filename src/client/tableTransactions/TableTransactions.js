/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import styles from "./TableTransactions.module.css";
import TableTransactionsExpense from "./TableTransactionsExpense";
import TableTransactionsIncome from "./TableTransactionsIncome";

const TableTransactions = () => {
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;

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
          {activeCheck === "/expences" ? (
            <TableTransactionsExpense />
          ) : (
            <TableTransactionsIncome />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
