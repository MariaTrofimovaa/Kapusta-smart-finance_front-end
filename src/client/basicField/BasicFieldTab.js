import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./BasicFieldTab.module.scss";

const BasicFieldTab = ({ text, link }) => {
  const currentLocation = useLocation();
  const activeCheck = link === currentLocation.pathname;
  return (
    <>
      {activeCheck ? (
        <Link to={link} className={styles.activeLink}>
          {text}
        </Link>
      ) : (
        <Link to={link} className={styles.notActiveLink}>
          {text}
        </Link>
      )}
    </>
  );
};

export default BasicFieldTab;
