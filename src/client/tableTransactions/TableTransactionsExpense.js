import transactionsOperations from "../../redux/transactions/transactions.operations";
import styles from "./TableTransactions.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconDelete from "../../shared/iconDelete/IconDelete";
import { getSelectedDate } from "../../redux/date/date.selectors";
import { getExpenseOfDaySelector } from "../../redux/transactions/transactions.selectors";
import ModalWindow from "../../shared/components/modalWindow/ModalWindow";

const TableTransactionsExpense = () => {
  const date = useSelector(getSelectedDate);
  const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, [date]);

  return tableTransactionsExpense.map((item) => (
    <tr key={item._id} className={styles.tableTr}>
      <td className={styles.tableDate}>{item.date}</td>
      <td className={styles.tableDescription}>{item.description}</td>
      <td className={styles.tableCategory}>{item.category}</td>
      <td className={styles.tableAmount}>{-item.amount}</td>
      <td className={styles.tableDelete}>
        <button
          className={styles.deleteBtn}
          type="button"
          onClick={handleModalOpen}
        >
          <IconDelete />
        </button>
        {isModalOpen && (
          <ModalWindow
            text={"Вы уверены?"}
            onCancel={handleModalClose}
            onSubmit={() => {
              dispatch(transactionsOperations.deleteTransaction(item._id));
            }}
          />
        )}
      </td>
    </tr>
  ));
};

export default TableTransactionsExpense;
