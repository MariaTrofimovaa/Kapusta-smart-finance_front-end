import { useDispatch, useSelector } from "react-redux";
import { setActiveCategori } from "../../redux/report/report.operations";

import { allexpenseOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../../client/CategoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportExpense = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(allexpenseOfMonth);

  const handleOnClick = (category) => {
    const newExpense = setActive(expenses, category);
    dispatch(setActiveCategori(newExpense));
  };

  return <CategoriesList transactionType={expenses} onClick={handleOnClick} />;
};

export default ReportExpense;
