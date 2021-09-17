import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import styles from "./Header.module.css";
import LogoImg from "../../assets/images/kapusta_main_logo.png";
import UserInfo from "./userInfo/UserInfo";
import UserLogout from "./userLogout/UserLogout";

const Header = () => {
  // Селекторы авторизации
  // Селектор модалки
  // const isUserLoggedIn = useSelector((state) => state.isloggedIn);
  // const isModalLogout = useSelector((state) => state.global.isModalLogout);

  return (
    <div className={styles.header}>
      <Link to="/" alt="homepage" className={styles.logoLink}>
        <img src={LogoImg} className={styles.logoImg} alt="Kapusta-logo" />
      </Link>

      {/* {isUserLoggedIn && ( */}
      <div className={styles.userInfo}>
        <UserInfo />
        <UserLogout />
        {/* {isModalLogout && <LogoutModal />} Подключить компонент Сергея */}
      </div>
      {/* )} */}
    </div>
  );
};

export default Header;
