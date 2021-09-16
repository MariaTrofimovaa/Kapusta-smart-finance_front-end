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
];

const Rechart = ({ chartData }) => {
  const { width } = useWindowSize();
  return width >= 768 ? (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          className={css.barChart}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar
            dataKey="coast"
            barSize={38}
            className={css.bar}
            radius={[10, 10, 0, 0]}
          >
            <LabelList
              dataKey="coast"
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
          <CartesianGrid vertical={false} opacity={0.3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={css.box_mobile}>
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
          {/* <YAxis dataKey="name" type="category" scale="band" /> */}

          <Bar
            dataKey="coast"
            barSize={15}
            className={css.bar}
            radius={[0, 10, 10, 0]}
          >
            <LabelList
              dataKey="coast"
              position="right"
              className={css.labelList}
            />
          </Bar>
          <CartesianGrid horizontal={false} vertical={false} opacity={0.3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
