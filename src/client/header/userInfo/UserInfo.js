import React from "react";
import defaultAvatar from "./default-avatar.png.png";
import { useSelector } from "react-redux";
import { getAuthUserName } from "../../../redux/auth/auth.selectors";

import styles from "./UserInfo.module.css";

const UserInfo = () => {
  // const UserName = useSelector((state) => state.user.userData.email);
  // прописать корректный путь и вынести селекторы
  const UserName = useSelector(getAuthUserName);
  console.log(UserName);
  // const UserNameFirstLetter = UserName.toUpperCase().slice(0, 1);
  // const indexUN = UserName.indexOf("@");
  const UserNameCut = UserName.substring(0, UserName.indexOf("@"));
  // придумать, откуда лучше брать картинку userImage: или из
  return (
    <>
      <div className={styles.userPage}>
        <div className={styles.userPic}>
          <img src={defaultAvatar} alt="userImg" className={styles.userPic} />
          {/* <p className={styles.userPicLetter}>U</p> */}
          {/* <p className={s.userPicLetter}>{UserNameFirstLetter}</p> */}
        </div>

        <p className={styles.userName}> {UserNameCut}</p>
        {/* <p className={styles.userNameFull}>{UserNameCut}</p> */}
      </div>
    </>
  );
};

export default UserInfo;
