import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Select from "react-select";

import Main from "../layouts/Main";

const Index = () => {
  const [company, setCompany] = useState("");
  const [verdict, setVerdict] = useState("");

  const [companyFilter, setCompanyFilter] = React.useState("No");
  const [verdictFilter, setVerdictFilter] = React.useState("No");

  const handleFilterChange = (event) => {
    let a = event.target.value;

    if (a === "Company Filter") {
      setCompanyFilter("Yes");
      setVerdictFilter("No");
    }
    if (a === "Verdict Filter") {
      setVerdictFilter("Yes");
      setCompanyFilter("No");
    }
    if (a === "Both") {
      setVerdictFilter("Yes");
      setCompanyFilter("Yes");
    }
  };

  let company_lst = [];

  Axios.get("http://localhost:3001/posts//getCompanyFromExpe").then((res) => {
    res.data.map((val) => {
      let tmp = { label: val.company_name, value: val.company_name };
      company_lst.push(tmp);
    });
  });
  let data = [];
  let verdict_list = [];
  verdict_list.push({ label: "Selected", value: "Selected" });
  verdict_list.push({ label: "Not Selected", value: "Not Selected" });

  function onNext() {
    data = [];
    Axios.get("http://localhost:3001/posts/getExpeCompanyWise").then((res) => {
      res.data.map((val) => {
        if (companyFilter === "Yes" && verdictFilter === "No") {
          if (val.company_name === company) {
            data.push(val);
          }
        }
        if (verdictFilter === "Yes" && companyFilter === "No") {
          if (val.verdict === verdict) {
            data.push(val);
          }
        }
        if (verdictFilter === "Yes" && companyFilter === "Yes") {
          if (val.verdict === verdict && val.company_name === company) {
            data.push(val);
          }
        }
      });
    });

    console.log(data);
  }

  return (
    <Main
      description={
        "Michael D'Angelo's personal website. New York based Stanford ICME graduate, " +
        "co-founder and CTO of Arthena, and YC Alumni."
      }
    >
      <div>
        <label htmlFor="company_name">
          Do you want to filter by Company, Verdict or by both?
        </label>
        <input
          type="radio"
          id="Company Filter"
          name="choose"
          value="Company Filter"
          onChange={handleFilterChange}
        />
        <label htmlFor="Company Filter">Company Filter</label>

        <input
          type="radio"
          id="Verdict Filter"
          name="choose"
          value="Verdict Filter"
          onChange={handleFilterChange}
        />
        <label htmlFor="Verdict Filter">Verdict Filter</label>

        <input
          type="radio"
          id="Both"
          name="choose"
          value="Both"
          onChange={handleFilterChange}
        />
        <label htmlFor="Both">Both Company and Verdict</label>
      </div>

      {companyFilter === "Yes" && (
        <div className="form-group">
          <label htmlFor="company_name">Filter By Company</label>
          <Select
            className="drop-down"
            options={company_lst}
            name="company"
            onChange={(opt) => {
              Select.value = opt.value;
              setCompany(opt.value);
            }}
          />
        </div>
      )}

      {verdictFilter === "Yes" && (
        <div className="form-group">
          <label htmlFor="company_name">
            Filter By Verdict (Selected/ Not Selected)
          </label>
          <Select
            className="drop-down"
            options={verdict_list}
            name="verdict"
            onChange={(opt) => {
              Select.value = opt.value;
              setVerdict(opt.value);
            }}
          />
        </div>
      )}

<article className="post" id="index">
              <header>
                <div className="title">
                  <h2 data-testid="heading">
                    <Link to="/">About this site</Link>
                  </h2>
                </div>
              </header>
              <p>e0irji0r</p>
            </article>

            

      <button
        type="submit"
        className="button is-block is-info is-fullwidth"
        onClick={() => {
          onNext();
        }}
      >
        View Experience
      </button>
    </Main>
  );
};

export default Index;
