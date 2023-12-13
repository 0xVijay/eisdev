// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const ApexChart = () => {
//   const series = [44, 55, 41, 17, 15];
//   const options = {
//     chart: {
//       type: "donut",
//       width: "100%",
//       height: "400px",
//     },
//     plotOptions: {
//       pie: {
//         dataLabels: {
//           position: "bottom",
//         },
//       },
//     },
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={series} type="donut" />
//     </div>
//   );
// };

// export default ApexChart;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
} from "recharts";

const DonutChart2 = () => {
  const data = [
    { name: "A", value: 101, bg: "#B57AFD" },
    { name: "C Name", value: 10, bg: "#E3D5F3" },
    { name: "SOA", value: 27, bg: "#33115E" },
    { name: "AAA", value: 55, bg: "#CBCBCB" },
    { name: "MX", value: 27, bg: "#690CDB" },
    { name: "TXT", value: 8, bg: "#4B4B4B" },
  ];

  return (
    <div style={{ width: "100%", height: "180px", position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            blendStroke
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.bg} />
            ))}
            <Label
              value="246"
              position="center"
              dy={-5}
              fontSize={16}
              fontWeight="bold"
              fill="#151D48"
            />
            <Label
              value="Total"
              position="center"
              dy={10}
              fontSize={8}
              fill="#737791"
            />
          </Pie>
          <Tooltip
            contentStyle={{
              fontSize: "8px",
              padding: "0px 5px",
              fontWeight: "700",
              background: "#FFF",
              borderRadius: "6px",
            }}
          />{" "}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart2;
