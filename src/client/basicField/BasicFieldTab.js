import React from "react";
import styles from "./BasicFieldTab.module.css";

const BasicFieldTab = ({ text, active, tabToggle }) => {
  return (
    <>
      {active ? (
        <button className={styles.activeBtn} type="button">
          {text}
        </button>
      ) : (
        <button
          className={styles.notActiveBtn}
          type="button"
          onClick={() => tabToggle()}
        >
          {text}
        </button>
      )}
    </>
    //   className={styles.linkActive}
    //   href="https://html5book.ru/css-shrifty/#about-color"
    // >
    //   <div className={styles.linksWrapperActive}>
    //     <p>{text}</p>
    //   </div>
    // </т>
  );
};

export default BasicFieldTab;
