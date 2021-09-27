import { useDispatch, useSelector } from "react-redux";
import { setActiveExpenseAction } from "../../redux/report/report.actions";

import { allexpenseOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../categoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportExpense = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(allexpenseOfMonth);

  const handleOnClick = (category) => {
    const newExpense = setActive(expenses, category);
    dispatch(setActiveExpenseAction(newExpense));
  };

  return <CategoriesList transactionType={expenses} onClick={handleOnClick} />;
};

export default ReportExpense;
