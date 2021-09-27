import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  allexpenseOfMonth,
  allIncomeOfMonth,
} from "../../redux/report/report.selectors";

import { useWindowSize } from "../../shared/windowSize/windowSize";
import {
  BarChart,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import css from "./Rechart.module.css";

const Rechart = () => {
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

  function byField(field) {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }

  const data = activeData
    .reduce((acc, { description, amount }) => {
      const descriptionNew =
        description[0].toUpperCase() + description.slice(1).toLowerCase();
      const desc = acc.find((el) => el.description === descriptionNew);
      if (!desc) {
        acc.push({
          description: descriptionNew,
          amount,
        });
        return acc;
      }
      if (desc) {
        const idx = acc.findIndex((el) => el.description === descriptionNew);
        acc[idx].amount += amount;
        return acc;
      }

      return acc;
    }, [])
    .sort(byField("amount"));
  const dataChart = data.length ? data : [0];
  ///////////////////////////////////////////////////////// стили графика /////////////////////////////////////////////////////////
  const BarLabelStyle = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        className={css.text}
        textAnchor="middle"
        dy={-10}
      >{`${value} грн`}</text>
    );
  };
  const BarLabelMobyle = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 1.11}
        y={y}
        className={css.text}
        textAnchor="middle"
        dy={-10}
      >{`${value} грн`}</text>
    );
  };

  ///////////////////////////////////////////////////////// стили графика /////////////////////////////////////////////////////////
  return width >= 768 ? (
    <div className={css.chart_box}>
      <ResponsiveContainer width="100%" height={422}>
        <BarChart
          data={dataChart}
          margin={{
            top: 30,
            right: 15,
            bottom: 20,
            left: 15,
          }}
          className={css.text}
        >
          <Bar
            dataKey="amount"
            barSize={38}
            radius={[10, 10, 0, 0]}
            label={BarLabelStyle}
          >
            {dataChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? "#FFDAC0" : "#ff751d"}
              />
            ))}
          </Bar>
          <XAxis
            dataKey="description"
            axisLine={false}
            tickLine={false}
            tickCount={9}
            minTickGap={50}
            ////////////
            allowDataOverflow={true}
            type="category"
            className={css.xaxis}
          />
          <CartesianGrid vertical={false} horizontal={false} opacity={0.2} />{" "}
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={css.mobile_box}>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          layout="vertical"
          data={dataChart}
          margin={{
            top: 20,
            right: 5,
            bottom: 10,
            left: 10,
          }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            dataKey="description"
            type="category"
            scale="band"
            hide={true}
          />
          <Bar
            dataKey="amount"
            barSize={18}
            radius={[0, 10, 10, 0]}
            label={BarLabelMobyle}
          >
            {dataChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? "#FFDAC0" : "#ff751d"}
              />
            ))}
            <LabelList
              dataKey="description"
              position="insideLeft"
              fill="#52555F"
            />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
