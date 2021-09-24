import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./BasicFieldTab.module.css";

const BasicFieldTab = ({ text, link }) => {
  // const activeLin = { ...styles.link, ...styles.activeLink };
  const currentLocation = useLocation();
  // console.log("CheckLocation", currentLocation);
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
