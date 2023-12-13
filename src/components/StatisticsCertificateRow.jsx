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

const StatisticsCertificateRow = () => {
  const data1 = [
    { name: "Active 1", value: 65, bg: "#A264EF" },
    { name: "Unknown", value: 45, bg: "#690CDB" },
    { name: "Expired Cert", value: 34, bg: "#2E0067" },
    { name: "Impersonation", value: 12, bg: "#DBDBDB" },
  ];
  const data2 = [
    { name: "A", value: 101, bg: "#B57AFD" },
    { name: "C Name", value: 10, bg: "#E3D5F3" },
    { name: "SOA", value: 27, bg: "#33115E" },
    { name: "AAA", value: 55, bg: "#CBCBCB" },
    { name: "MX", value: 27, bg: "#690CDB" },
    { name: "TXT", value: 8, bg: "#4B4B4B" },
  ];

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
            <DonutChart1 />
            <Row>
              {data1.map((entry, index) => (
                <Col lg={6} className="d-flex align-items-center gap-1">
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: entry.bg,
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
            className="d-flex flex-column justify-content-between p-0 bg-white"
          >
            {/* <StyledText
              color={"#151D48"}
              fontSize={"15px"}
              margin={"0px 0px 18px 0px"}
              className="p-2"
            >
              List of Vulnerability data table{" "}
            </StyledText> */}
            {/* <MUITable /> */}
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
            <DonutChart2 />
            <Row>
              {data2.map((entry, index) => (
                <Col lg={4} className="d-flex align-items-center gap-1">
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: entry.bg,
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
