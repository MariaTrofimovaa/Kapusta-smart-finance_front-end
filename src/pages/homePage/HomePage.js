import React from "react";
import Calendar from "../../client/enterForm/calendar/Calendar";
import EnterForm from "../../client/enterForm/enterForm/EnterForm"
import Balance from "../../client/balance/Balance"
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div>
      <div className={styles.inputForm}>
        <Calendar />
        {/* <img src="./calendar 1.svg" alt="" />
          <svg width="18" height="20">
            <use href="./symbol-defs.svg.svg#calendar"></use>
          </svg> */}

        <EnterForm />
        <Balance />
      </div>
    </div>
  );
};

export default HomePage;
