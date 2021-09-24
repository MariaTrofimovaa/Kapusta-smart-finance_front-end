import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
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
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;
  // console.log(activeCheck);
  const date = useSelector(getSelectedDate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getAllIncomeOfDate(date));
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, [dispatch, date]);

  const tableTransactionsEx = useSelector(getExpenseOfDaySelector);
  console.log("ex", tableTransactionsEx);
  const tableTransactionsInc = useSelector(getIncomeOfDaySelector);
  console.log("inc", tableTransactionsInc);

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
          {activeCheck === "/expense"
            ? tableTransactionsEx.map((item) => (
                <TableTransactionsExpense key={item._id} item={item} date />
              ))
            : tableTransactionsInc.map((item) => (
                <TableTransactionsIncome key={item._id} item={item} date />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
