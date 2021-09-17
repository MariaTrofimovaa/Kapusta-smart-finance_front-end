import React from "react";

const Brief = () => {
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
        {months.map((month) => (
          <li>
            <span> {month}</span>
            <span> 20000</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
