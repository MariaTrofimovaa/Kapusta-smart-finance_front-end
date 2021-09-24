import { useSelector } from "react-redux";
import { allIncomeOfMonth, allexpenseOfMonth } from "../../redux/report/report.selectors";
import css from "./UserMount.module.css";
import Line from "../../assets/images/line.png";

const UserMount = () =>  {
const expense = useSelector(allexpenseOfMonth);
const income = useSelector(allIncomeOfMonth);

const userExpense = expense.reduce((acc, { categorySum }) => {
    acc += categorySum
    return acc;
}, 0);

const userIncome = income.reduce((acc, { categorySum }) => {
    acc += categorySum
    return acc;
}, 0);

return (
    <div className={css.userMount}>
        <p  className={css.expense} >
            Расходы :
        </p>
        <span className={css.userExpense}>{userExpense}</span>
    <img className={css.Line} src={Line} alt="line" width="2" height="32" />
        <p  className={css.income} >
            Доходы :
        </p>
        <span className={css.userIncome}>{userIncome}</span>
    </div>
);
}
export default UserMount;
