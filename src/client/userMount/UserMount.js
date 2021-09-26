import { useSelector } from "react-redux";
import { allIncomeOfMonth, allexpenseOfMonth } from "../../redux/report/report.selectors";
import scss from "./UserMount.module.scss";
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
    <div className={scss.userMount}>
        <div>
            <p  className={scss.expense} >
                Расходы :
            </p>
            <span className={scss.userExpense}>-{userExpense}грн.</span>
        </div>
    <img className={scss.Line} src={Line} alt="line" width="2" height="32" />
        <div>
            <p  className={scss.income} >
                Доходы :
            </p>
            <span className={scss.userIncome}>+{userIncome}грн.</span>
        </div>
    </div>
);
}
export default UserMount;
