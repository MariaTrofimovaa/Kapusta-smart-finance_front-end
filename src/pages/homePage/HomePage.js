import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import Balance from "../../client/balance/Balance";
import BasicField from "../../client/basicField/BasicField";
import { setCurrentLocation } from "../../redux/screenWidth/screenWidth.action";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setCurrentLocation(location));
  }, []);

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
