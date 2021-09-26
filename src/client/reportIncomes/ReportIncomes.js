import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllIncomeOfMonth,
  setActiveCategori,
} from "../../redux/report/report.operations";

import { allIncomeOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../../client/CategoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportIncomes = () => {
  const dispatch = useDispatch();

  const incomes = useSelector(allIncomeOfMonth);
  const month = "09.2021";

  useEffect(() => {
    dispatch(getAllIncomeOfMonth(month));
  }, []); // добавить изменение по дате

  const handleOnClick = (category) => {
    const newIncomes = setActive(incomes, category);
    dispatch(setActiveCategori(newIncomes));
  };

  return <CategoriesList transactionType={incomes} onClick={handleOnClick} />;
};

export default ReportIncomes;
