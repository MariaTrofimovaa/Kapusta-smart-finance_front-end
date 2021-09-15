import React from "react";
import styles from "./MainBtns.module.css";

const MainBtns = () => {
  return (
    <>
      <button type="button" className={styles.btnEnter}>
        Войти
      </button>
      <button type="button" className={styles.btnRegister}>
        Регистрация
      </button>

      <button type="button" className={styles.btnSubmit}>
        Ввод
      </button>
      <button type="button" className={styles.btnClear}>
        Очистить
      </button>
    </>
  );
};

export default MainBtns;
