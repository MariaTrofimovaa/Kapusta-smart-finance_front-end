import IconDelete from "../../shared/iconDelete/IconDelete";
import styles from "./TableTransactions.module.css";

import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getTransactionOfDaySelector } from "../../redux/transactions/transactions.selectors";
import transactionsOperations from "../../redux/transactions/transactions.operations";

const TableTransactions = () => {
  const tableTransactions = useSelector(getTransactionOfDaySelector);

  const dispatch = useDispatch();

  const date = "23.09.2021";

  useEffect(() => {
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
    // dispatch(getAllIncomeOfMonth(month));
  }, []); //добавить дату из селектора Алены

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
          {tableTransactions && !tableTransactions.length && null}
          {tableTransactions.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
