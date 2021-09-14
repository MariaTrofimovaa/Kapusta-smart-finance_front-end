import React from "react";

import { ReactComponent as LogoutSvg } from "../../../assets/icons/logout.svg";
import styles from "./UserLogout.module.css";

const UserLogout = () => {
  return (
    <>
      <button type="button" className={styles.logoutBtn}>
        <LogoutSvg className={styles.logoutSvg} />
        <p className={styles.logoutText}>Выйти</p>
      </button>
    </>
  );
};

export default UserLogout;
