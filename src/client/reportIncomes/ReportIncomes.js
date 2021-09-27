import { useDispatch, useSelector } from "react-redux";
import { setActiveIncomeAction } from "../../redux/report/report.actions";

import { allIncomeOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../categoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportIncomes = () => {
  const dispatch = useDispatch();

  const incomes = useSelector(allIncomeOfMonth);

  const handleOnClick = (category) => {
    const newIncomes = setActive(incomes, category);
    dispatch(setActiveIncomeAction(newIncomes));
  };

  return <CategoriesList transactionType={incomes} onClick={handleOnClick} />;
};

export default ReportIncomes;
