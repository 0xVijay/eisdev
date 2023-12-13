import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchResults.css";
import headerUser from "./assets/Header-namegroup.png";
import MuiTableComponent from "./MuiTableComponent";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { dom } from "aria-query";
import StatChart from "./components/StatisticsWikipediaRow"
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
} from "./assets";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import DonutChart4 from "./components/DonutChart4";

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
        value: "30",
        value2: "295",
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
        value: "3.7K",
        value2: "2.5k",
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
        value: "8.7K",
        value2: "295",
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
        title: "Total Domain",
        value: "17",
        img: icon_wiki_domain,
    },
    {
        title: "Total Cost",
        value: "1823",
        img: icon_wiki_cost,
    },
    {
        title: "Total Register",
        value: "25",
        img: icon_wiki_register,
    },
    {
        title: "Total Authority",
        value: "23",
        img: icon_wiki_authority,
    },
];

const domainCount = {
    domainName: "appviewx.com",
    orgName: "AppViewX",
    parentDomainCount: 112331,
    subDomainCount: 42342,
    phishingDomainMetrics: {
        potentialPhishingCount: 12234,
        registeredPhishingSites: 24422,
        unregisteredPhishingSites: 5767,
    },
    metrics: [
        {
            title: "Untrusted CAs",
            value: 190,
        },
        {
            title: "DNS Misconfiguration",
            value: 100,
        },
        {
            title: "Certificate Mismatch",
            value: 29,
        },
        {
            title: "Certificate Vulnerabilities",
            value: 39,
        },
    ],
};

const PhishingMonitoring = () => {

    const navigate = useNavigate();

    const handleClick = (category) => {
        switch (category) {
            case 'Phishing Domain':
                navigate('/phishing-domain');
                break;
            case 'Certificate Impersonation':
                navigate('/certspace');
                break;
            case 'DNS Vulnerability':
                navigate('/search-results');
                break;
            default:
                // Optional: handle default case
                break;
        }
    };


    const formatToK = (value) => {
        if (value < 1000) {
            return value.toString();
        } else {
            return (value / 1000).toFixed(1) + "K";
        }
    };

    const AnimatedCounter = ({ endValue }) => {
        const [count, setCount] = useState(0);
        const duration = 2000; // Complete the animation in 2000ms

        useEffect(() => {
            let step = Math.ceil(endValue / (duration / 100)); // Adjust the increment step to complete on time
            const timer = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + step;
                    if (newCount < endValue) {
                        return newCount;
                    } else {
                        clearInterval(timer);
                        return endValue; // Ensure we don't exceed the end value
                    }
                });
            }, 100); // Update every 100ms

            return () => clearInterval(timer); // Cleanup on unmount
        }, [endValue, duration]);

        return <p className="card-value-txt">{formatToK(count)}</p>;
    };

    const { searchTerm } = useParams();

    const data2 = [
        { name: "A", value: 101, bg: "#690CDB" },
        { name: "C Name", value: 10, bg: "#B57AFD" },
        { name: "SOA", value: 27, bg: "#737791" },
      ];

    // Implement your search results display logic here

    return (
        <div>
            {/* Display search results */}

            {/* Add the HTML content here */}
            <div class="ti-container">
                <Sidebar />
                <Header />

                <div class="ti-cards-container">
                    <div class="domain-header">
                        <p class="domain-header-txt">{domainCount.domainName}</p>
                        <p class="domain-header-org-txt">{domainCount.orgName}</p>
                    </div>

                    <div class="card-container-1">

                        <Col lg={4} className="d-flex">
                            <StyledCard
                                style={{
                                    flex: 1,
                                }}
                                className="d-flex flex-column justify-content-between"
                            >
                                <StyledText margin={"0px 0px 18px 0px"}>wikipedia.org</StyledText>
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
                                        <div className="dash-card-1-col-1-txt-org">AppViewX Inc</div>
                                        <div className="dash-card-1-col-1-txt">priyeshkuarfaefafarframar@gmail.com</div>
                                        <div className="dash-card-1-col-1-txt">Anand Purushothaman</div>
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
                        <div class="content-card-phish">
                            <div class="card-header">
                                <p class="card-header-txt">{domainCount.metrics[2].title}</p>
                            </div>
                            <div class="card-separator-line">

                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.metrics[2].value} duration={1000} />
                            </div>
                        </div>
                        <div class="content-card-divided-phish">
                            <div class="card-header">
                                <p class="card-header-txt-divided">Potential Phishing</p>
                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.phishingDomainMetrics.potentialPhishingCount} duration={1000} />
                            </div>
                            <div class="card-separator-line-divided">
                            </div>
                            <div className='divided-card-bottom-container'>
                                <div className='divided-card-bottom-individual-container-1-phish'>
                                    <div class="card-header">
                                        <p class="card-header-txt-divided-bottom-left">Registered</p>
                                    </div>
                                    <div class="card-value">
                                        <AnimatedCounter endValue={domainCount.phishingDomainMetrics.registeredPhishingSites} duration={1000} />
                                    </div>
                                </div>
                                <div className='divided-card-bottom-individual-container-2-phish '>
                                    <div class="card-header">
                                        <p class="card-header-txt-divided-bottom-right">Unregistered</p>
                                    </div>
                                    <div class="card-value">
                                        <AnimatedCounter endValue={domainCount.phishingDomainMetrics.unregisteredPhishingSites} duration={1000} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-card-divided-phish" style={{padding:"10px"}}>
                            <DonutChart4 className="donut-chart-4"/>
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
                    <StyledText className="donut-chart-text" fontSize={"10px"}>{entry.name}</StyledText>
                  </div>
                  <StyledText fontSize={"10px"} marginBottom={"5px"}>{entry.value}</StyledText>
                </Col>
              ))}
            </Row>
                        </div>
                    </div>
                    <div class="ti-table">
                        <MuiTableComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhishingMonitoring;
