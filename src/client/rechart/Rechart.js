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
  const activeCheck = currentLocation.pathname;
  const expenses = useSelector(allexpenseOfMonth);
  const incomes = useSelector(allIncomeOfMonth);
  const curTypeOfPage = activeCheck === "/report" ? expenses : incomes;
  const { width } = useWindowSize();

  const activeData = curTypeOfPage.reduce((acc , obj) => {
    if (obj.isActive) {
      // console.log(obj.types);
      acc.push(obj.types)
      return acc;
    }
  },[]);
  
  const activeData2 =  curTypeOfPage.find((obj) => {
    if (obj.isActive) {
      // console.log(obj.types);
      return obj.types;
    }
  })

  // console.log(activeData)
  // console.log(activeData2)

  return width >= 768 ? (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} className={css.barChart} minPointSize={5}>
          <Bar dataKey="coast" barSize={35} radius={[10, 10, 0, 0]}>
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
            dataKey="name"
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
