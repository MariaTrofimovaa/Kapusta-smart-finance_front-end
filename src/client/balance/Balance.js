import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import styles from "./Balance.module.css";
import Tooltip from "../../shared/components/tooltip/Tooltip";

import balanceOperations from "../../redux/balance/balance.operations";
import balanceSelectors from "../../redux/balance/balance.selectors";

function Balance() {
  const currentLocation = useLocation();
  const activeCheck = currentLocation.pathname;
  // console.log(activeCheck);

  const dispatch = useDispatch();
  let balanceFromStore = useSelector(balanceSelectors.getBalance); // эта переменная получает баланс из стора

  const onBalanceInputChange = (e) => {
    let inputValue = e.target.value;

    e.target.value =
      inputValue.replace(/[^\d.-]/g, "").replace(/^0+(?!$)/g, "") + " UAH"; // при редактировании баланса мы убираем все введенные нецифровые символы и добавляем UAH
  };

  useEffect(() => {
    dispatch(balanceOperations.getBalanceOperation());
  }, [dispatch]);

  // эта функция отвечает за отправку нового баланса на бекенд
  const updateBalance = (e) => {
    e.preventDefault();
    const newBalance = e.target.balance.value.split(" ")[0]; // отрежем UAH и вообще все что после первого пробела. валидация в принципе не нужна, т.к. в onBalanceInputChange мы убеждаемся, что значение баланса всегда будет "цифра UAH"
    dispatch(balanceOperations.setBalanceOperation(newBalance));
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div>
          <Link to="/report" className={styles.reportsLink}>
            Перейти к отчетам
          </Link>
        </div>
        <form className={styles.balanceContainer} onSubmit={updateBalance}>
          <p className={styles.balanceName}>Баланс:</p>
          <div className={styles.inputButtonContainer}>
            <div
              key={
                balanceFromStore /*это небольшой трюк, чтобы поле баланс обновлялось после изменения balanceFromStore несмотря на то, что оно uncontrollable*/
              }
            >
              <input
                className={styles.inputField}
                name="balance"
                type="text"
                defaultValue={
                  parseFloat(
                    balanceFromStore && typeof balanceFromStore === "number"
                      ? balanceFromStore
                      : 0
                  ).toFixed(2) + " UAH"
                }
                onChange={onBalanceInputChange}
              />
              {!balanceFromStore && balanceFromStore !== 0 ? <Tooltip /> : ""}
            </div>
            <button type="submit" className={styles.submitBtn}>
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Balance;
