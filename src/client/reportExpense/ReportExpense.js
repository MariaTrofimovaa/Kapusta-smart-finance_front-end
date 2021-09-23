import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllExpenseOfMonth,
  setActiveCategori,
} from "../../redux/report/report.operations";

import { allexpenseOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../categoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportExpense = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(allexpenseOfMonth);
  const month = "09.2021";

  useEffect(() => {
    dispatch(getAllExpenseOfMonth(month));
  }, []); // добавить изменение по дате

  const handleOnClick = (category) => {
    const newExpense = setActive(expenses, category);
    dispatch(setActiveCategori(newExpense));
  };

  return <CategoriesList transactionType={expenses} onClick={handleOnClick} />;
};

export default ReportExpense;
