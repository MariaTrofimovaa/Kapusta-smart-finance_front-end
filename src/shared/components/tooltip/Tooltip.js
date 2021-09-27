import styles from "./Tooltip.module.scss";

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
