import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Balance.module.css";


import balanceOperations from "../../redux/balance/balance.operations";
import balanceSelectors from "../../redux/balance/balance.selectors"


function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(balanceSelectors.getBalance);
  //const date = useSelector((store) => store.calendar);

  useEffect(() => {
    dispatch(balanceOperations.getBalanceOperation());
  }, []);

  const setBalance = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className={styles.container}>
        {/*balance === 0 ? <BalanceModal /> : ""*/}
        <div className={styles.tabletBox}>
          <form className={styles.balanceBox} onSubmit={setBalance}>
            <p className={styles.balance}>Баланс:</p>
            <input className={styles.moneyInput} name="balance" type="text" value={`${balance.toFixed(2)} UAH`} />

            <button type="submit" className={styles.confirmBtn}>
              Подтвердить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Balance;
