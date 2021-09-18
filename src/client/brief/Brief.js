import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrief } from "../../redux/transactions/tranzactionsOperations";

import { getBrief } from "../../redux/transactions/tranzactionsSelectors";

const Brief = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(getBrief);

  const sum = transactions.reduce((acc, item) => (acc += item.amount), 0);

  const filter = {
    // type: "income",
    type: "expense",
    startdate: "01.01.2021",
    finishdate: "31.12.2021",
  };

  useEffect(() => {
    dispatch(fetchBrief(filter));
  }, [dispatch]);

  const months = [];
  for (let i = 0; i < 6; ++i) {
    let month = new Date();
    month.setMonth(month.getMonth() - i);
    months.push(month.toLocaleDateString("ru", { month: "long" }));
  }

  return (
    <div>
      <div>Сводка</div>
      <ul>
        {transactions &&
          transactions.map(({ amount, transactionType, _id }) => (
            <li key={_id}>
              {amount} {transactionType}
            </li>
          ))}
      </ul>
      {transactions && <span>сумма {sum}</span>}
    </div>
  );
};

export default Brief;
