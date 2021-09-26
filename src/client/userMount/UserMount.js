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
        <div className={scss.expenseContainer}>
            <p  className={scss.expenseText} >
                Расходы :
            </p>
            <span className={scss.userExpense}>-&nbsp;{userExpense.toFixed(2)}&nbsp;грн.</span>
        </div>
    <img className={scss.Line} src={Line} alt="line" width="2" height="32" />
        <div className={scss.incomeContainer}>
            <p  className={scss.incomeText} >
                Доходы :
            </p>
            <span className={scss.userIncome}>+&nbsp;{userIncome.toFixed(2)}&nbsp;грн.</span>
        </div>
    </div>
);
}
export default UserMount;
