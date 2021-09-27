import MobileTransactions from "./MobileTransactions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./TableTransactions.module.css";
import {
  getExpenseOfDaySelector,
  getIncomeOfDaySelector,
} from "../../redux/transactions/transactions.selectors";
import TableTransactionsExpense from "./TableTransactionsExpense";
import TableTransactionsIncome from "./TableTransactionsIncome";
import { getSelectedDate } from "../../redux/date/date.selectors";
import { useEffect } from "react";
import transactionsOperations from "../../redux/transactions/transactions.operations";

const TableTransactions = () => {
  const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);
  const tableTransactionsIncome = useSelector(getIncomeOfDaySelector);
  const tableTransaction = [
    ...tableTransactionsExpense,
    ...tableTransactionsIncome,
  ];
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;

  const dispatch = useDispatch();

  const date = useSelector(getSelectedDate);
  useEffect(() => {
    dispatch(transactionsOperations.getAllIncomeOfDate(date));
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, [dispatch, date]);

  return (
    <>
      <div className={styles.tablDeskWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableHeadTr}>
              <th className={styles.tableTransThDate}>Дата</th>
              <th className={styles.tableTransThDescr}>Описание</th>
              <th className={styles.tableTransThCategory}>Категория</th>
              <th className={styles.tableTransThAmount}>Сумма</th>
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {activeCheck === "/expense"
              ? tableTransactionsExpense.map((item) => (
                  <TableTransactionsExpense key={item._id} item={item} />
                ))
              : tableTransactionsIncome.map((item) => (
                  <TableTransactionsIncome key={item._id} item={item} />
                ))}
          </tbody>
        </table>
      </div>
      <div className={styles.mobileWrapper}>
        <div className={styles.listWrapper}>
          <ul className={styles.mobileList}>
            {tableTransaction.map((item) => (
              <MobileTransactions
                tableTransaction={tableTransaction}
                key={item._id}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TableTransactions;
