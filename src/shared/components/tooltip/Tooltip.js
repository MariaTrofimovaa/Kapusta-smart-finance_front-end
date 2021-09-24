// Синее всполывающее окно, когда баланс равен null/undefined - это tooltip (обычная подсказка).
// будет выводится для свежезарегистрированных пользователей (у которых баланса просто не будет) 

// Баланс = 0 - это может быть вполне реальный случай, когда пользователь просто потратил все деньги и ждет поступлений
// выводить подсказку в этом случае неправильно

import styles from "./Tooltip.module.css";

const Tooltip = () => {
  return (
    <div id="overlay" className={styles.toolTipContainer}>
        <p className={styles.toolTipText}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.toolTipTextComment}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
    </div>
  );
};

export default Tooltip;
