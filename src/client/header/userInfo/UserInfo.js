import React from "react";
// import { useSelector } from "react-redux";

import styles from "./UserInfo.module.css";

const UserInfo = () => {
  // const UserName = useSelector((state) => state.user.userData.email); // прописать корректный путь и вынести селекторы
  // const UserNameFirstLetter = UserName.toUpperCase().slice(0, 1);
  // const indexUN = UserName.indexOf("@");
  // const UserNameCut = UserName.slice(0, indexUN);
  // придумать, откуда лучше брать картинку userImage: или из 
  return (
    <>
      <div className={styles.userPage}>
        <div className={styles.userPic}>
          {/* <img src={userImage} alt="userImg" className={styles.userPic} /> */}
          <p className={styles.userPicLetter}>U</p>
          {/* <p className={s.userPicLetter}>{UserNameFirstLetter}</p> */}
        </div>

        <p className={styles.userName}> UserName</p>
        {/* <p className={styles.userNameFull}>{UserNameCut}</p> */}
      </div>
    </>
  );
};

export default UserInfo;
