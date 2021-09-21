import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import operation from "../../redux/transactions/transactions.operations";

// import selector from "../../redux/transactions/transactions.selectors";

const Brief = () => {
  const dispatch = useDispatch();

  // const transactions = useSelector(selector.getBrief);

  // const sum = transactions.reduce((acc, item) => (acc += item.amount), 0);

  const filter = {
    // type: "income",
    type: "expense",
    year: "2021",
  };

  useEffect(() => {
    dispatch(operation.fetchBrief(filter));
  }, [dispatch]);

  // const months = [];
  // for (let i = 0; i < 6; ++i) {
  //   let month = new Date();
  //   month.setMonth(month.getMonth() - i);
  //   months.push(month.toLocaleDateString("ru", { month: "long" }));
  // }

  return (
    <div>
      <div>Сводка</div>
      <ul>
        {/* {transactions &&
          transactions.map(({ amount, transactionType, _id }) => (
            <li key={_id}>
              {amount} {transactionType}
            </li>
          ))} */}
      </ul>
      {/* {transactions && <span>сумма {sum}</span>} */}
    </div>
  );
};

export default Brief;
