import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledCard, StyledText } from "./StatisticsWikipediaRow";
import DonutChart1 from "./DonutChart1.jsx";
import DonutChart2 from "./DonutChart2.jsx";
import AreaChartComponent from "../AreaChartComponent.js";
import DonutChart3 from "./DonutChart3.jsx";
import '../Dashboard.css';

const StatisticsTransparencyRow = () => {
  const data1 = [
    { name: "Active 1", value: 65, bg: "#A264EF" },
    { name: "Unknown", value: 45, bg: "transparent" },
    { name: "Expired Cert", value: 34, bg: "#2E0067" },
    { name: "Impersonation", value: 12, bg: "#DBDBDB" },
  ];
  const data2 = [
    { name: "A", value: 101, bg: "#690CDB" },
    { name: "C Name", value: 10, bg: "#B57AFD" },
    { name: "SOA", value: 27, bg: "#737791" },
  ];

  return (
    <Container>
      <Row className="">
        <Col lg={9} className="">
          <StyledCard
            br={"8px"}
            style={{
              flex: 1,
            }}
            className="d-flex flex-column justify-content-between bg-white dash-cert-chart"
          >
            <StyledText
              color={"#151D48"}
              fontSize={"15px"}
              margin={"0px 0px 18px 0px"}
              className="p-2"
            >
              Certificate Transparency
            </StyledText>
            <AreaChartComponent />
          </StyledCard>
        </Col>
        <Col lg={3} className="p-0 d-flex">
          <StyledCard
            style={{
              flex: 1,
            }}
            className="d-flex flex-column justify-content-between bg-white"
          >
            <StyledText
              color={"#151D48"}
              fontSize={"15px"}
              margin={"0px 0px 18px 0px"}
            >
              Key Summary
            </StyledText>
            <StyledText
              color={"#737791"}
              fontSize={"7px"}
              margin={"0px 0px 18px 0px"}
            >
              Last Updated on December 10, 2023 at 03:16 PM
            </StyledText>
            <DonutChart3 />
            <Row>
              {data2.map((entry, index) => (
                <Col
                  lg={4}
                  className="d-flex align-items-center justify-content-between gap-2"
                >
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: entry.bg,
                      }}
                    ></div>
                    <StyledText fontSize={"7px"}>{entry.name}</StyledText>
                  </div>
                  <StyledText fontSize={"7px"}>{entry.value}</StyledText>
                </Col>
              ))}
            </Row>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
};

export default StatisticsTransparencyRow;
