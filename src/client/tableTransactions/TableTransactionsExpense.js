import transactionsOperations from "../../redux/transactions/transactions.operations";
import styles from "./TableTransactions.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconDelete from "../../shared/iconDelete/IconDelete";
import { getSelectedDate } from "../../redux/date/date.selectors";
import ModalWindow from "../../shared/components/modalWindow/ModalWindow";

const TableTransactionsExpense = ({ item }) => {
  // const date = useSelector(getSelectedDate);
  // const tableTransactionsExpense = useSelector(getExpenseOfDaySelector);

  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <tr key={item._id} className={styles.tableTr}>
      <td className={styles.tableDate}>{item.date}</td>
      <td className={styles.tableDescription}>{item.description}</td>
      <td className={styles.tableCategory}>{item.category}</td>
      <td className={styles.tableAmount}>{-item.amount}.00 грн.</td>
      <td className={styles.tableDelete}>
        <button
          className={styles.deleteBtn}
          type="button"
          onClick={() => {
            toggleModal();
          }}
        >
          <IconDelete />
        </button>
        {isModalOpen && (
          <ModalWindow
            text={"Вы уверены?"}
            onCancel={toggleModal}
            onSubmit={() => {
              dispatch(transactionsOperations.deleteTransaction(item._id));
            }}
          />
        )}
      </td>
    </tr>
  );
};

export default TableTransactionsExpense;
