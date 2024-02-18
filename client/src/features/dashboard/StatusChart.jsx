/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const StatusChart = ({ data }) => {
  const { query } = data;
  const style = {
    Pending: "#0088FE",
    Rejected: "#00C49F",
    Offered: "#FFBB28",
    Interviewed: "#FF8042",
  };

  return (
    <>
      <PieChart width={800} height={400}>
        <Pie
          data={query}
          cx="40%"
          cy={200}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="nums"
        >
          {query.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={style[entry._id]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
        <Tooltip />
      </PieChart>
      <ul>
        {query.map((entry, index) => (
          <li key={`legend-${index}`} style={{ color: style[entry._id] }}>
            {entry._id}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatusChart;
