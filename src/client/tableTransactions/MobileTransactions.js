import transactionsOperations from "../../redux/transactions/transactions.operations";
import styles from "./TableTransactions.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconDelete from "../../shared/iconDelete/IconDelete";
// import { getSelectedDate } from "../../redux/date/date.selectors";

import ModalWindow from "../../shared/components/modalWindow/ModalWindow";

const MobileTransactions = ({ item }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    setModalOpen(!isModalOpen);
  };

  // const date = useSelector(getSelectedDate);

  // useEffect(() => {
  //   dispatch(transactionsOperations.getAllIncomeOfDate(date));
  //   dispatch(transactionsOperations.getAllExpenseOfDate(date));
  // }, [dispatch, date]);

  return (
    <li className={styles.mobileListItem} key={item._id}>
      <div className={styles.listWrapperItem}>
        <p className={styles.textDescMob}>{item.description}</p>
        <div className={styles.listWrapperItem2}>
          <p className={styles.dateMob}>{item.date}</p>
          <p className={styles.categoryMob}>{item.category}</p>
        </div>
      </div>
      <p
        className={
          item.transactionType === "expense"
            ? styles.amountMob
            : styles.amountMobGreen
        }
      >
        {item.transactionType === "expense" ? -item.amount : item.amount} грн.
      </p>
      <div className={styles.btnWrapper}>
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
      </div>
    </li>
  );
};

export default MobileTransactions;
