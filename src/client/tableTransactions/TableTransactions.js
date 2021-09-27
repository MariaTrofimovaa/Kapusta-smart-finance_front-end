import MobileTransactions from "./MobileTransactions";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getExpenseOfDaySelector,
  getIncomeOfDaySelector,
} from "../../redux/transactions/transactions.selectors";
import TableTransactionsExpense from "./TableTransactionsExpense";
import TableTransactionsIncome from "./TableTransactionsIncome";
import styles from "./TableTransactions.module.scss";

const TableTransactions = () => {
  const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);
  const tableTransactionsIncome = useSelector(getIncomeOfDaySelector);
  const tableTransaction = [
    ...tableTransactionsExpense,
    ...tableTransactionsIncome,
  ];
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;

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
