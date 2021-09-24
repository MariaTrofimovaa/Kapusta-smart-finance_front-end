// import { useSelector, useDispatch } from "react-redux";
// import { getAuthUserName } from "../../redux/auth/auth-selectors";
import css from "./UserMount.module.css";
import Line from "../../assets/images/line.png";

const UserMount = () =>  {
//   const dispatch = useDispatch();
//   const name = useSelector(getAuthUserName);
return (
    <div className={css.userMount}>
        <p  className={css.expense} >
            Расходы :
        </p>
        {/* <span className={css.userExpense}>{userExpense}</span> */}
    <img className={css.Line} src={Line} alt="line" width="2" height="32" />
        <p  className={css.income} >
            Доходы :
        </p>
        {/* <span className={css.userIncome}>{userIncome}</span> */}
    </div>
);
}
export default UserMount;
