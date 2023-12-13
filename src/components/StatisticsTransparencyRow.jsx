import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledCard, StyledText } from "./StatisticsWikipediaRow";
import DonutChart1 from "./DonutChart1.jsx";
import DonutChart2 from "./DonutChart2.jsx";
import AreaChartComponent from "../AreaChartComponent.js";
import DonutChart3 from "./DonutChart3.jsx";
import '../Dashboard.css';
import { generateColor } from "../color.js";

const StatisticsTransparencyRow = (props) => {
  const response = props.data.response;
 const colors = generateColor('#690CDB', '#b57afd', 10);

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
            <AreaChartComponent data={response.certificateTransperancy} />
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
            <DonutChart3 data={response.keySummary} colors={colors} />
            <Row>
              {response.keySummary.map((entry, index) => (
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
                        backgroundColor: colors[index],
                      }}
                    ></div>
                    <StyledText fontSize={"7px"}>{entry.name}</StyledText>
                  </div>
                  <StyledText fontSize={"7px"}>{formatToK(entry.value)}</StyledText>
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
