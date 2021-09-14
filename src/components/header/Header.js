import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import LogoImg from "../../assets/images/kapusta_main_logo.png"
import UserInfo from "../userInfo/UserInfo";
import UserLogout from "../userLogout/UserLogout";

const Header = () => {
    return (
      <div className={styles.header}>
        <Link to="/" alt="homepage" className={styles.logoLink}>
          <img src={LogoImg} className={styles.logoImg} alt="Kapusta-logo" />
        </Link>

        <div className={styles.userInfo}>
          <UserInfo />
          <UserLogout />
        </div>
      </div>
    );
};

export default Header;
