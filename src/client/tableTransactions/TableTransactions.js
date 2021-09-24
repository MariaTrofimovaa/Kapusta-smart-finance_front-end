import { useLocation } from "react-router-dom";
import MobileTransactions from "./MobileTransactions";
import styles from "./TableTransactions.module.css";
import TableTransactionsExpense from "./TableTransactionsExpense";
import TableTransactionsIncome from "./TableTransactionsIncome";
import { useSelector } from "react-redux";
import {
  getExpenseOfDaySelector,
  getIncomeOfDaySelector,
} from "../../redux/transactions/transactions.selectors";

const TableTransactions = () => {
  const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);
  const tableTransactionsIncome = useSelector(getIncomeOfDaySelector);
  const tableTransaction = [
    ...tableTransactionsExpense,
    ...tableTransactionsIncome,
  ];
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;
  // console.log(activeCheck);

  return (
    <>
      <div className={styles.tablDeskWrapper}>
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
            {activeCheck === "/expense" ? (
              <TableTransactionsExpense
                tableTransactionsExpense={tableTransactionsExpense}
              />
            ) : (
              <TableTransactionsIncome
                tableTransactionsIncome={tableTransactionsIncome}
              />
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.mobileWrapper}>
        <MobileTransactions tableTransaction={tableTransaction} />
      </div>
    </>
  );
};

export default TableTransactions;
