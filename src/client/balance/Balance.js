import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Balance.module.css";


import balanceOperations from "../../redux/balance/balance.operations";
import balanceSelectors from "../../redux/balance/balance.selectors"

// поле balance может заполняться как из redux store так и из локального реакт стейта
// это нужно для того, чтоб а) поле можно было редактировать б) оно получало данные из стора (куда они попадают после запроса на бекенд) при загрузке
// при первой загрузке компонента (при рефреше страницы) мы устанавливаем флажок balanceSetManually в фолс 
// это значит, что поле не редактировалось вручную и его значение нужно взять из стора (т.е. переменной balanceFromStore)
// при первом же вызове хендлера onChange мы меняем флажок на тру и начинаем брать его значение из локального стейта (balanceFromInput) 
// альтернативным решением было бы при каждом onChange обновлять значение баланса в сторе, но это нерационально 
let balanceSetManually = false;

function Balance() {
  const dispatch = useDispatch();

  let [balanceFromInput, setBalanceInput] = useState('');

  const onBalanceInputChange = (event) => {
    balanceSetManually = true; // если пользователь отредактировал баланс, то ставим флажок в тру
    setBalanceInput(event.target.value);
  };

  let balanceFromStore = useSelector(balanceSelectors.getBalance); // эта переменная получает баланс из стора

  useEffect(() => {
    if (!balanceSetManually) dispatch(balanceOperations.getBalanceOperation()); // при ре-рендере компонента запрашивать баланс из базы мы будем только в том случае, если он не вводился в ручную
  }, [dispatch]);

  // эта функция отвечает за отправку нового баланса на бекенд
  const updateBalance = (e) => {
    e.preventDefault();
    const newBalance = e.target.balance.value.split(' ')[0]; // отрежем UAH и вообще все что после первого пробела. ЕЩЕ ЗДЕСЬ НУЖНА БУДЕТ ВАЛИДАЦИЯ
    dispatch(balanceOperations.setBalanceOperation(newBalance));
  };

  return (
    <div className="container">
      <div className={styles.container}>
        {/*balance === 0 ? <BalanceModal /> : ""*/}
        <div className={styles.tabletBox}>
          <form className={styles.balanceBox} onSubmit={updateBalance}>
            <p className={styles.balance}>Баланс:</p>
            <input className={styles.moneyInput} name="balance" type="text" value={balanceSetManually ? balanceFromInput : balanceFromStore + " UAH" } onChange={onBalanceInputChange}/>
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
