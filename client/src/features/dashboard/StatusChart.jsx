import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const StatusChart = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx="40%"
          cy={200}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
    </>
  );
};

export default StatusChart;
