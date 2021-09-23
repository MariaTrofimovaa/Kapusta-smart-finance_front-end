import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncomeOfMonth } from "../../redux/report/report.operations";

import { allIncomeOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../categoriesList/CategoriesList";

const ReportIncomes = () => {
  const dispatch = useDispatch();

  const incomes = useSelector(allIncomeOfMonth);
  const month = "09.2021";
  useEffect(() => {
    dispatch(getAllIncomeOfMonth(month));
  }, []); // добавить изменение по дате

  return <CategoriesList transactionType={incomes} />;
};

export default ReportIncomes;
