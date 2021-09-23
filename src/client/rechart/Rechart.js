import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllExpenseOfMonth,
  setActiveCategori,
} from "../../redux/report/report.operations";
import { useLocation } from "react-router-dom";
import {
  allexpenseOfMonth,
  allIncomeOfMonth,
} from "../../redux/report/report.selectors";

import { useWindowSize } from "../../shared/windowSize/windowSize";
import {
  // Area,
  BarChart,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  // Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import css from "./Rechart.module.css";

const data = [
  {
    name: "Свинина",
    coast: 4000,
  },
  {
    name: "Говядина",
    coast: 3000,
  },
  {
    name: "Говядина",
    coast: 3000,
  },
  {
    name: "Курица",
    coast: 2000,
  },
  {
    name: "Индейка",
    coast: 2780,
  },
  {
    name: "Говядина",
    coast: 3000,
  },
  {
    name: "Говядина",
    coast: 3000,
  },
  {
    name: "Курица",
    coast: 2000,
  },
  {
    name: "Индейка",
    coast: 2780,
  },
  {
    name: "Индейка",
    coast: 2780,
  },
];

const Rechart = ({ chartData }) => {
  const currentLocation = useLocation();
  const curLocation = currentLocation.pathname;
  const expenses = useSelector(allexpenseOfMonth);
  const incomes = useSelector(allIncomeOfMonth);
  const curTypeOfPage = curLocation === "/report" ? expenses : incomes;
  const { width } = useWindowSize();

  const activeData =
    curTypeOfPage?.length > 0
      ? curTypeOfPage.find((obj) => obj.isActive).types
      : [];

  // function byField(field) {
  //   return (a, b) => (a[field] < b[field] ? 1 : -1);
  // }
  // console.log(data.sort(byField("coast")));
  // console.log(activeData.sort(byField("amount")));

  // console.log(activeData);
  const awdadw = activeData.reduce((acc, { description, amount }) => {
    const desc = acc.find((el) => el.description === amount);
    if (!desc) {
      acc.push({ description, amount });
      return acc;
    }
    if (desc) {
      const idx = acc.findIndex((el) => el.description === amount);
      acc[idx].description = description;
      acc[idx].amount += amount;
      return acc;
    }

    return acc;
  }, []);
  console.log(awdadw);

  return width >= 768 ? (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activeData} className={css.barChart} minPointSize={5}>
          <Bar dataKey="amount" barSize={35} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? "#FFDAC0" : "#ff751d"}
              />
            ))}
            <LabelList
              dataKey="amount"
              position="top"
              className={css.labelList}
            />
          </Bar>
          <XAxis
            dataKey="description"
            axisLine={false}
            tickLine={false}
            className={css.x}
          />
          {/* <YAxis
              dataKey={false}
              axisLine={false}
              tickLine={false}
              tickCount={9}
            /> */}
          ​
          <CartesianGrid vertical={false} opacity={0.3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 50,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" scale="band" />
          <Bar dataKey="coast" barSize={15} label="right">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 ? "#ff751d" : "#FFDAC0"}
              />
            ))}
            <LabelList
              dataKey="coast"
              position="right"
              className={css.labelList}
            />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
