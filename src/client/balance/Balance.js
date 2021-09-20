import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import styles from "./Balance.module.css";
import Tooltip from "../../shared/components/tooltip/Tooltip";

import balanceOperations from "../../redux/balance/balance.operations";
import balanceSelectors from "../../redux/balance/balance.selectors";

function Balance() {
  const dispatch = useDispatch();
  let balanceFromStore = useSelector(balanceSelectors.getBalance); // эта переменная получает баланс из стора

  const onBalanceInputChange = (e) => {
    let inputValue = e.target.value;
    e.target.value = inputValue.replace(/[^\d.-]/g, "") + " UAH"; // при редактировании баланса мы убираем все введенные нецифровые символы и добавляем UAH
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
    <div className="container">
      <div className={styles.container}>
        {!balanceFromStore && balanceFromStore !== 0 ? <Tooltip /> : ""}
        <div className={styles.tabletBox}>
          <form className={styles.balanceBox} onSubmit={updateBalance}>
            <p className={styles.balance}>Баланс:</p>
            <div
              key={
                balanceFromStore /*это небольшой трюк, чтобы поле баланс обновлялось после изменения balanceFromStore несмотря на то, что оно uncontrollable*/
              }
            >
              <input
                className={styles.moneyInput}
                name="balance"
                type="text"
                defaultValue={parseFloat(balanceFromStore).toFixed(2) + " UAH"}
                onChange={onBalanceInputChange}
              />
            </div>
            <button type="submit" className={styles.confirmBtn}>
              Подтвердить
            </button>
          </form>
        </div>
        <div>
          <Link to="/report" className={styles.reportsLink}>
            Перейти к отчетам
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Balance;
