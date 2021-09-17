import React from "react";
// import { useDispatch } from "react-redux";

import { ReactComponent as LogoutSvg } from "../../../assets/icons/logout.svg";
// import { logOut } from "../../../redux/auth/auth.operations";
import styles from "./UserLogout.module.css";

const UserLogout = () => {
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logOut());
  // };

  return (
    <>
      <button type="button" className={styles.logoutBtn}>
        <LogoutSvg className={styles.logoutSvg} />
        <p className={styles.logoutText}>Выйти</p>
        {/* <p className={styles.logoutText} onClick={handleLogout}>
          Выйти
        </p> */}
      </button>
    </>
  );
};

export default UserLogout;
