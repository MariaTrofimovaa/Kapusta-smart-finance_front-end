import transactionsOperations from "../../redux/transactions/transactions.operations";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconDelete from "../../shared/iconDelete/IconDelete";
import ModalWindow from "../../shared/components/modalWindow/ModalWindow";
import styles from "./TableTransactions.module.scss";

const TableTransactionsIncome = ({ item }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  return (
    <tr key={item._id} className={styles.tableTr}>
      <td className={styles.tableDate}>{item.date}</td>
      <td className={styles.tableDescription}>{item.description}</td>
      <td className={styles.tableCategory}>{item.category}</td>
      <td className={styles.tableAmountIncome}>{item.amount}.00 грн.</td>
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
export default TableTransactionsIncome;
