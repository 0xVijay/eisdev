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

const DonutChart2 = (props) => {
  const data = props.data;
  const colors = props.colors;
  const totalDNS = 13434;

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
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
            <Label
              value={totalDNS}
              position="center"
              dy={-5}
              fontSize={16}
              fontWeight="bold"
              fill="#151D48"
            />
            <Label
              value="Total DNS Records"
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
