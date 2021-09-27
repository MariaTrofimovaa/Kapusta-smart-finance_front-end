import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import Tooltip from "../../shared/components/tooltip/Tooltip";
import balanceOperations from "../../redux/balance/balance.operations";
import balanceSelectors from "../../redux/balance/balance.selectors";

import styles from "./Balance.module.scss";

function Balance() {
  const dispatch = useDispatch();
  let balanceFromStore = useSelector(balanceSelectors.getBalance);

  const location = useLocation();
  const isReportPage =
    location.pathname === "/report" || location.pathname === "/report/incomes";

  const updateBalance = (e) => {
    e.preventDefault();
    const newBalance = e.target.balance.value.split(" ")[0]; // отрежем UAH и вообще все что после первого пробела. валидация в принципе не нужна, т.к. в onBalanceInputChange мы убеждаемся, что значение баланса всегда будет "цифра UAH"
    dispatch(balanceOperations.setBalanceOperation(newBalance));
  };
  return (
    <div className={!isReportPage ? styles.container : styles.containerReport}>
      <div
        className={
          !isReportPage ? styles.formContainer : styles.formContainerReport
        }
      >
        {!isReportPage && (
          <div className={styles.linkContainer}>
            <Link to="/report" className={styles.reportsLink}>
              Перейти к отчетам
            </Link>
          </div>
        )}
        <form className={styles.balanceContainer} onSubmit={updateBalance}>
          <p className={styles.balanceName}>Баланс:</p>
          <div className={styles.inputButtonContainer}>
            <div key={balanceFromStore}>
              <input
                className={
                  !isReportPage ? styles.inputField : styles.inputFieldReport
                }
                name="balance"
                type="text"
                defaultValue={
                  parseFloat(
                    balanceFromStore && typeof balanceFromStore === "number"
                      ? balanceFromStore
                      : 0
                  ).toFixed(2) + " UAH"
                }
              />
              {!balanceFromStore ? <Tooltip /> : ""}
            </div>
            <button
              type="submit"
              className={
                !isReportPage ? styles.submitBtn : styles.submitBtnReport
              }
            >
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Balance;
