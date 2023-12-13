import React from "react";
import {
  icon_computer_wiki,
  icon_wiki_authority,
  icon_wiki_cost,
  icon_wiki_domain,
  icon_wiki_flag,
  icon_wiki_green_arrow,
  icon_wiki_lock,
  icon_wiki_red_arrow,
  icon_wiki_register,
} from "../assets";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom";
import { generateColor } from "../color";

export const StyledText = styled.p`
  color: ${(props) =>
    props.color ? props.color : "var(--Primary-Color, #151D48)"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Inter")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export const StyledCard = styled.div`
  background: ${(props) => (props.bg ? props.bg : `#f7f7f7`)};
  border-radius: ${(props) => (props.br ? props.br : `8px`)};
  padding: ${(props) => (props.padding ? props.padding : `14px`)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : `start`)};
  height: ${(props) => (props.height ? props.height : `auto`)};
`;

export const LineSeparator = styled.div`
  height: ${(props) => (props.height ? props.height : "18px")};
  width: 2px;
  background-color: #737791;
`;

const cardData = [
  {
    value: "30323",
    value2: "2953",
    domain1: "go0gle.com",
    domain2: "wikipaedia.com",
    domain3: "amezon.com",
    category: "Phishing Domain",
    gradientColor: "233, 12, 12",
    textColor: "#FFF",
    textColor1: "#737791",
    headerColor: "#E90C0C",
    width: "30%",
  },
  {
    value: "34343",
    value2: "22323",
    domain1: "go0gle2.com",
    domain2: "wikipaedia2.com",
    domain3: "amezon2.com",
    category: "Certificate Impersonation",
    gradientColor: "221, 202, 27",
    textColor: "#FFF",
    textColor1: "#737791",
    headerColor: "#151D48",
    width: "40%",
  },
  {
    value: "8322",
    value2: "23232",
    domain1: "go0gle.com",
    domain2: "wikipaedia.com",
    domain3: "amezon.com",
    category: "DNS Vulnerability",
    gradientColor: "0, 191, 88",
    textColor: "#FFF",
    textColor1: "#737791",
    headerColor: "#00BF58",
    width: "30%",
  },
];
const domainData = [
  {
    title: "Total ASM Domains",
    value: "17",
    img: icon_wiki_domain,
  },
  {
    title: "Total Certificates",
    value: "1823",
    img: icon_wiki_cost,
  },
  {
    title: "Total Registrars",
    value: "25",
    img: icon_wiki_register,
  },
  {
    title: "Total CAs",
    value: "23",
    img: icon_wiki_authority,
  },
];

const StatisticsWikipediaRow = (props) => {
  const response = props.data.response;
  const navigate = useNavigate();

  const handleClick = (category) => {
    switch(category) {
      case 'Phishing Domain':
        navigate('/phishing-monitoring');
        break;
      case "Certificate Space":
        navigate("/certspace", {response});
        break;
      case "Phishing Monitoring":
        navigate("/search-results", {response});
        break;
      default:
        // Optional: handle default case
        break;
    }
  };

    const getCurrentDateIST = () => {
      const options = { 
        timeZone: 'Asia/Kolkata', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      };
      return new Date().toLocaleDateString('en-US', options);
    };

    const formatToK = (value) => {
      if (value < 1000) {
          return value.toString();
      } else {
          return (value / 1000).toFixed(1) + 'K';
      }
  };

  return (
    <Container className="wiki-row-container">
      <Row className="bg-white p-1 d-flex border rounded py-3">
        <Col lg={4} className="d-flex">
          <StyledCard
            style={{
              flex: 1,
            }}
            className="d-flex flex-column justify-content-between"
          >
            <StyledText margin={"0px 0px 18px 0px"}>
              {response.domainName}
            </StyledText>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBlockEnd: "34px" }}
            >
              <img
                src={icon_wiki_lock}
                alt="icon_wiki_lock"
                className="img-fluid"
              />
              {/* <StyledText fontSize={"62px"} color={"#690CDB"}>
                96.4
                <span style={{ fontSize: "31px" }}>/100</span>
              </StyledText> */}
              <LineSeparator height="100px" />
              <div className="dash-card-1-col-1">
                <div className="dash-card-1-col-1-txt-org">
                  {response.domainInfo.orgName}
                </div>
                <div className="dash-card-1-col-1-txt">
                  {response.domainInfo.email}
                </div>
                <div className="dash-card-1-col-1-txt">
                  {response.domainInfo.ownerName}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-2">
              <img
                src={icon_computer_wiki}
                alt="icon_computer_wiki"
                className="img-fluid"
              />
              <LineSeparator />
              <StyledText color="#737791" fontSize={"10px"}>
                24 Pages
              </StyledText>

              <img
                src={icon_wiki_flag}
                alt="icon_wiki_flag"
                className="img-fluid"
              />
              <LineSeparator />
              <StyledText color="#737791" fontSize={"10px"}>
                India
              </StyledText>
            </div>
          </StyledCard>
        </Col>
        {/* <LineSeparator height={"200px"} /> */}
        <Col lg={4} className="d-flex">
          <StyledCard
            style={{
              flex: 1,
            }}
          >
            <div className="d-flex justify-content-center align-items-between gap-1">
              {response.card.map((data, index) => (
                <div
                  key={index}
                  style={{ width: data.width }}
                  className="d-flex flex-column justify-content-between"
                >
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <StyledText
                      fontSize={"18px"}
                      color={cardData[index].headerColor}
                      textAlign={"center"}
                    >
                      {data.count}
                    </StyledText>
                    <StyledText
                      fontSize={"8px"}
                      color={"#737791"}
                      margin={" 0 0 23px 0"}
                    >
                      {data.name}
                    </StyledText>
                  </div>
                  <StyledCard
                    className="gradient-cards"
                    onClick={() => handleClick(data.name)}
                    bg={`linear-gradient(180deg, rgba(${cardData[index].gradientColor}, 0.00) 0%, rgb(${cardData[index].gradientColor}) 100%)`}
                    br="3px"
                    padding="20px"
                    textAlign="center"
                    height="180px"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexBasis: "Column",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <StyledText
                        fontSize={"10.5px"}
                        color={"#FFF"}
                        textAlign={"center"}
                        fontWeight={"400"}
                      >
                        {
                          data.values.map((domain) => (
                            <p>{domain}</p>
                          ))
                        }
                      </StyledText>
                    </div>
                  </StyledCard>
                </div>
              ))}
            </div>
          </StyledCard>
        </Col>
        <Col lg={4} className="">
          <Row className="m-0 p-0">
            {response.domainData.map((data, index) => (
              <Col lg={6} className="px-1 mb-2" key={index}>
                <StyledCard>
                  <StyledText color="#151D48" fontSize={"11px"}>
                    {data.title}
                  </StyledText>
                  <StyledText color="#151D48" fontSize={"35px"}>
                    {formatToK(data.value)}
                  </StyledText>
                  <div className="d-flex justify-content-end">
                    <img
                      src={domainData[index].img}
                      alt="icon_wiki_domain"
                      className="img-fluid"
                    />
                  </div>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </Col>
        <div className="d-flex justify-content-between mt-1">
          <StyledText fontSize={"12px"} color={"#737791"}>
            Date: &nbsp;
            <span style={{ color: "#151D48" }}>{getCurrentDateIST()}</span>
          </StyledText>
          <div className="d-flex align-items-center gap-3">
            <StyledText
              fontSize={"12px"}
              color={"#151D48"}
              cursor={"pointer"}
              onClick={() => handleClick('Certificate Space')}
            >
              Certificate Space&nbsp;
              <span style={{ color: "#690CDB" }}>
                {/* 7.9 */}
                <img
                  src={icon_wiki_green_arrow}
                  alt="icon_wiki_green_arrow"
                  className="img-fluid"
                />
              </span>
            </StyledText>
            <StyledText
              fontSize={"12px"}
              color={"#151D48"}
              cursor={"pointer"}
              onClick={() => handleClick('Domain Space')}
            >
              Domain Space &nbsp;
              <span style={{ color: "#690CDB" }}>
                {/* 12.28 */}
                <img
                  src={icon_wiki_red_arrow}
                  alt="icon_wiki_red_arrow"
                  className="img-fluid"
                />
              </span>
            </StyledText>
            <StyledText
              fontSize={"12px"}
              color={"#151D48"}
              cursor={"pointer"}
              onClick={() => handleClick('Phishing Monitoring')}
            >
              Phishing Monitoring &nbsp;
              <span style={{ color: "#690CDB" }}>
                {/* 0.4 */}
                <img
                  src={icon_wiki_green_arrow}
                  alt="icon_wiki_green_arrow"
                  className="img-fluid"
                />
              </span>
            </StyledText>
            {/* <StyledText
              fontSize={"12px"}
              color={"#690CDB"}
              style={{ textDecoration: "underline" }}
            >
              See all
            </StyledText> */}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default StatisticsWikipediaRow;
