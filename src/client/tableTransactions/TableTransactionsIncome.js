import transactionsOperations from "../../redux/transactions/transactions.operations";
import styles from "./TableTransactions.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconDelete from "../../shared/iconDelete/IconDelete";
import { getIncomeOfDaySelector } from "../../redux/transactions/transactions.selectors";

const TableTransactionsIncome = () => {
  const tableTransactionsIncome = useSelector(getIncomeOfDaySelector);
  const dispatch = useDispatch();
  const date = "2022-09-21";
  useEffect(() => {
    dispatch(transactionsOperations.getAllIncomeOfDate(date));
  }, []);

  return tableTransactionsIncome.map((item) => (
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
            dispatch(transactionsOperations.deleteTransaction(item._id))
          }
        >
          <IconDelete />
        </button>
      </td>
    </tr>
  ));
};

export default TableTransactionsIncome;
