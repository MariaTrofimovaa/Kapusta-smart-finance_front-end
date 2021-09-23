import React, { useEffect, useState } from "react";
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
  const [categoryState, setCategoryState] = useState("");

  const expenses = useSelector(allexpenseOfMonth);
  const month = "09.2021";

  useEffect(() => {
    dispatch(getAllExpenseOfMonth(month));
  }, []); // добавить изменение по дате

  const handleOnClick = async (e) => {
    const id = await e.target.id;
    await console.log(id);
    await setCategoryState(id);
    const newExpense = await setActive(expenses, categoryState);
    console.log(newExpense);
    // dispatch(setActiveCategori(newExpense));
  };

  return <CategoriesList transactionType={expenses} onClick={handleOnClick} />;
};

export default ReportExpense;
