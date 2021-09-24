import React, { useState } from "react";
import { useDispatch } from "react-redux";

// import { ReactComponent as LogoutSvg } from "../../../assets/icons/logout.svg";
import ModalWindow from "../../../shared/components/modalWindow/ModalWindow";
import { logOut } from "../../../redux/auth/auth.operations";
import { ReactComponent as LogoutSvg } from "../../../assets/icons/logout.svg";
import styles from "./UserLogout.module.scss";

const UserLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  // const handleLogout = useCallback(() => {
  //   dispatch(logOut());
  // }, [dispatch]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className={styles.logoutBtn}
        onClick={handleModalOpen}
      >
        <LogoutSvg className={styles.logoutSvg} />
        <p className={styles.logoutText}>Выйти</p>
      </button>
      {isModalOpen && (
        <ModalWindow
          text={"Вы действительно хотите выйти?"}
          onCancel={handleModalClose}
          onSubmit={handleLogout}
        />
      )}
    </>
  );
};

export default UserLogout;
