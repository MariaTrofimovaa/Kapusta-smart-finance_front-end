import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  allexpenseOfMonth,
  allIncomeOfMonth,
} from "../../redux/report/report.selectors";

import { useWindowSize } from "../../shared/windowSize/windowSize";
import {
  Area,
  BarChart,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Line,
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
  const BarLabelMobyle = ({ payload, x, y, width, height, value,  }) => {
    return (
      <text
        x={x + width / 1.09}
        y={y}
        className={css.text}
        textAnchor="middle"
        dy={-10}
      >{`${value} грн`}</text>
    );
  };
  const BarTitleMobyle = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 1.5}
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
      <ResponsiveContainer width="80%" height={422}>
        <BarChart
          data={data}
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
            {data.map((entry, index) => (
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
            minTickGap={5}
          />
          <CartesianGrid vertical={false} horizontal={false} opacity={0.2} />{" "}
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={css.mobile_box}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 5,
            bottom: 10,
            left: 10,
          }}
        >
          <XAxis type="number" hide={true} label={BarTitleMobyle}  />
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
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? "#FFDAC0" : "#ff751d"}
              />
            ))}
            <LabelList dataKey="description" position="insideLeft" fill="#52555F"  />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <Bar
            dataKey="amount"
            barSize={15}
            radius={[0, 10, 10, 0]}
            // label={BarLabelMobyle}
          >
            <YAxis
              dataKey="description"
              type="category"
              scale="band"
              axisLine={false}
              tickLine={false}
            />{" "}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? "#FFDAC0" : "#ff751d"}
              />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>{" "} */}
    </div>
  );
};

export default Rechart;
