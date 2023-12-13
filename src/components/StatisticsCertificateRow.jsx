import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  LineSeparator,
  StyledCard,
  StyledText,
} from "./StatisticsWikipediaRow";
import DonutChart1 from "./DonutChart1.jsx";
import DonutChart2 from "./DonutChart2.jsx";
import MUITable from "../MuiTableComponent.js";
import { generateColor } from "../color";

const StatisticsCertificateRow = (props) => {
  const response = props.data.response;
 const colors = generateColor('#690CDB', '#b57afd', 10);

  return (
    <Container>
      <Row className="">
        <Col lg={3} className="p-0">
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
              Certificate Space
            </StyledText>
            <DonutChart1 data={response.certificateSpace} colors={colors} />
            <Row>
              {response.certificateSpace.map((entry, index) => (
                <Col lg={6} className="d-flex align-items-center gap-1">
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: colors[index]
                    }}
                  ></div>
                  <StyledText fontSize={"10px"}>{entry.name}</StyledText>
                </Col>
              ))}
            </Row>
          </StyledCard>
        </Col>
        <Col lg={6} border-0>
          <StyledCard
            border="0"
            br={"8px"}
            style={{
              flex: 1,
            }}
            height="260px"
            className="dashboard-dns-card d-flex flex-column justify-content-between p-0 bg-white"
          >
            <MUITable />
          </StyledCard>
        </Col>
        <Col lg={3} className="p-0">
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
              DNS Records
            </StyledText>
            <DonutChart2 data={response.dnsRecords} colors={colors} />
            <Row>
              {response.dnsRecords.map((entry, index) => (
                <Col lg={4} className="d-flex align-items-center gap-1">
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: colors[index]
                    }}
                  ></div>
                  <StyledText fontSize={"10px"}>{entry.name}</StyledText>
                </Col>
              ))}
            </Row>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
};

export default StatisticsCertificateRow;
{
  /* <div
className="d-flex align-items-center justify-content-between"
style={{ marginBlockEnd: "34px" }}
>
<StyledText fontSize={"62px"} color={"#690CDB"}>
  96.4
  <span style={{ fontSize: "31px" }}>/100</span>
</StyledText>
</div>
<div className="d-flex align-items-center justify-content-start gap-2">
<LineSeparator />
<StyledText color="#737791" fontSize={"10px"}>
  24 Pages
</StyledText>

<LineSeparator />
<StyledText color="#737791" fontSize={"10px"}>
  India
</StyledText>
</div> */
}
