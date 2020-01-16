import React from "react";
import "./App.css";
import data from "./data.js";

const CompaniesList = () => {
  return (
    <div className="CompaniesList">
      <h1>Companies List</h1>
      <ul>
        {data.companies.map((company) => {
          return <li key={company.id}>{company.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CompaniesList;
