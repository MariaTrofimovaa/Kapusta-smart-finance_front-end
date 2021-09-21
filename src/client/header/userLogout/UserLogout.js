import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

// import { ReactComponent as LogoutSvg } from "../../../assets/icons/logout.svg";
import { logOut } from "../../../redux/auth/auth.operations";
import styles from "./UserLogout.module.css";

const UserLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  // const handleLogout = useCallback(() => {
  //   dispatch(logOut());
  // }, [dispatch]);

  return (
    <>
      <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
        {/* <LogoutSvg className={styles.logoutSvg} /> */}

        <p className={styles.logoutText}>Выйти</p>
      </button>
    </>
  );
};

export default UserLogout;
