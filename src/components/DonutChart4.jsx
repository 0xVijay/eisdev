import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const DonutChart4 = () => {
  const data = [
    {
      name: "violet",
      innerRadius: 100,
      outerRadius: 100,
      fill: "#690CDB",
      start: 90,
      end: 90 + 270 * 0.75,
      value: 50,
    },
    {
      name: "violets opacity",
      innerRadius: 70,
      outerRadius: 80,
      fill: "#8e57d282",
      start: 90,
      end: 90 + 270 * 0.6,
      value: 30,
    },
    {
      name: "Grey",
      innerRadius: 50,
      outerRadius: 60,
      fill: "#929292",
      start: 90,
      end: 90 + 270 * 0.4,
      value: 20,
    },
  ];

  return (
    <div style={{ width: "80%", height: "180px" }}>
      <ResponsiveContainer>
        <RadialBarChart
          width={500}
          height={200}
          innerRadius="100%"
          outerRadius="40%"
          data={data}
          startAngle={90}
          endAngle={-180}
        >
          <RadialBar dataKey="value" cornerRadius={0} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart4;
