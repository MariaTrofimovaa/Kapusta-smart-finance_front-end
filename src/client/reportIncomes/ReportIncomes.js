import { useDispatch, useSelector } from "react-redux";
import { setActiveCategori } from "../../redux/report/report.operations";

import { allIncomeOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../../client/CategoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportIncomes = () => {
  const dispatch = useDispatch();

  const incomes = useSelector(allIncomeOfMonth);

  const handleOnClick = (category) => {
    const newIncomes = setActive(incomes, category);
    dispatch(setActiveCategori(newIncomes));
  };

  return <CategoriesList transactionType={incomes} onClick={handleOnClick} />;
};

export default ReportIncomes;
