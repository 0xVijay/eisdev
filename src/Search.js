import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import searchIcon from "./assets/searchbar-search-icon.png";
import avxIcon from "./assets/header-logo.svg";
import rightIcon from "./assets/arrow-right.svg";

const Header = () => {
  return (
    <header className="search-header">
      <div className="search-logo">
        <img src={avxIcon} alt="Header Logo" />
      </div>
      <div className="header-buttons">
        <button className="login-btn">Contact Us</button>
        <button className="signup-btn">Support</button>
      </div>
    </header>
  );
};

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [ApiErrorMessage, setApiErrorMessage] = useState("");
  const [isApiError, setisApiError] = useState(false);
  const navigate = useNavigate();

  const isValidDomain = (urlString) => {
    const regex = new RegExp(/\.[a-z]{2,}$/);
    return regex.test(urlString);
  };

  const handleSearch = async () => {
    if (isValidDomain(searchTerm)) {
      setIsInvalidUrl(false); // Set isInvalidUrl to false as the domain is valid
      navigate(`/dashboard/${searchTerm}`, {
        state: {
          apiData: {
            response: {
              status: "success",
              domainName: searchTerm,
              domainInfo: {
                orgName: "AppViewX Inc",
                email: "priyeshkuarfaefafarframar@gmail.com",
                ownerName: "Anand Purushothaman",
              },
              card: [
                {
                  name: "Phishing Domain",
                  count: 30,
                  values: ["go0gle.com", "github.com", "go0gle.com"],
                },
                {
                  name: "Certificate Impersonation",
                  count: 30,
                  values: ["go0gle2.com", "go0gle2.com", "go0gle2.com"],
                },
                {
                  name: "DNS Vulnerability",
                  count: 30,
                  values: ["go0gle.com", "go0gle.com", "go0gle.com"],
                }
              ],
              domainData: [
                  {
                    title: "Total Domain",
                    value: "17",
                  },
                  {
                    title: "Total Cost",
                    value: "1823",
                  },
                  {
                    title: "Total Register",
                    value: "35",
                  },
                  {
                    title: "Total Authority",
                    value: "23",
                  },
              ],
              certificateSpace: [
                { name: "Unknown", value: 45 },
                { name: "Expired Cert", value: 34 },
                { name: "Impersonation", value: 12 },
              ],
              dnsRecords: [
                { name: "A", value: 101, bg: "#B57AFD" },
                { name: "C Name", value: 10, bg: "#E3D5F3" },
                { name: "SOA", value: 27, bg: "#33115E" },
                { name: "AAA", value: 55, bg: "#CBCBCB" },
                { name: "MX", value: 27, bg: "#690CDB" },
                { name: "TXT", value: 8, bg: "#4B4B4B" },
              ],
              keySummary: [
                { name: "A", value: 101, bg: "#690CDB" },
                { name: "C Name", value: 10, bg: "#B57AFD" },
                { name: "SOA", value: 27, bg: "#737791" },
              ],
              certificateTransperancy: [
                {
                  name: "GoDaddy.com",
                  Issue: 10,
                  Expiry: 48,
                  DNS: 75,
                },
                {
                  name: "Entrust.Inc",
                  Issue: 65,
                  Expiry: 56,
                  DNS: 23,
                },
              ],
            }
          },
        },
      });
      try {
        setisApiError(false);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json", "username": "admin", "password":"AppViewX@1234" },
          body: JSON.stringify({
            payload: {
              domainName: searchTerm,
            },
          }),
        };
        fetch(
          "http://pe-eis-centos-node02.lab.appviewx.net:30001/avxapi/consolidated-metrics?gwsource=api",
          requestOptions
        )
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              navigate(`/dashboard/${searchTerm}`, {
                state: { apiData: result },
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setisApiError(true);
              setApiErrorMessage("something went wrong, please try again!!!");
            }
          );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    } else {
      setIsInvalidUrl(true); // Set isInvalidUrl to true as the domain is invalid
      console.log("Invalid domain:", searchTerm);
      // Optionally, handle invalid domain inputs here
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search-container">
        <h1 className="search-heading">
          Fortify Your Defense: Enhance Your Security Posture with Customized{" "}
          <span className="search-heading-seo">
            Threat Intelligence Insights
          </span>
          .
        </h1>
        <div className="search-bar-container">
          <div className="search-bar-input-container">
            <img
              onClick={handleSearch}
              src={searchIcon}
              alt="Search Icon"
              className="search-icon"
            />
            <input
              onKeyDown={handleKeyDown}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="search-bar"
              placeholder="Type Your Website Here..."
            />
            <img
              onClick={handleSearch}
              src={rightIcon}
              alt="arrow-right"
              className="arrow-right"
            />
          </div>
        </div>
        <div className="invalid-domain-err-container">
          {isInvalidUrl && (
            <p className="error-message">
              Please enter a valid domain. Ex: google.com
            </p>
          )}
          {isApiError && (
            <p className="error-message">
              {ApiErrorMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-results/${searchTerm}`);
  };

  return (
    <div className="search-body-container">
      <Header />
      <SearchContainer />
    </div>
  );
};

export default Search;
