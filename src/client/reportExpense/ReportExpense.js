import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpenseOfMonth } from "../../redux/report/report.operations";

import { allexpenseOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../CategoriesList/CategoriesList";

const ReportExpense = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(allexpenseOfMonth);
  const month = "2021-09";
  useEffect(() => {
    dispatch(getAllExpenseOfMonth(month));
  }, []); // добавить изменение по дате

  return <CategoriesList transactionType={expenses} />;
};

export default ReportExpense;
