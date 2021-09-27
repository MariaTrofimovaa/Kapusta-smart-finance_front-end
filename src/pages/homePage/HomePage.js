import React from "react";

import Balance from "../../client/balance/Balance";
import BasicField from "../../client/basicField/BasicField";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {!isPageWideMobile ? (
        <div>
          <div className={styles.inputForm}>
            <Balance />
            <BasicField />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.inputForm}>
            <BasicField />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
