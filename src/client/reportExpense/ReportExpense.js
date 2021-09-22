import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpenseOfMonth } from "../../redux/report/report.operations";

import { allexpenseOfMonth } from "../../redux/report/report.selectors";
import CategoriesList from "../CategoriesList/CategoriesList";
import setActive from "../../shared/setActive/setActive";

const ReportExpense = () => {
  const dispatch = useDispatch();
  const [categoryState, setCategoryState] = useState("");

  const expenses = useSelector(allexpenseOfMonth);
  const month = "09.2021";

  useEffect(() => {
    dispatch(getAllExpenseOfMonth(month));
  }, []); // добавить изменение по дате

  // const newExpense = setActive(expenses, categoryState);
  // console.log(newExpense)

  const handleOnClick = async (e) => {
    await setCategoryState(e.currentTarget.id);
  };

  return <CategoriesList transactionType={expenses} onClick={handleOnClick} />;
};

export default ReportExpense;
