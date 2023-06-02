import React from "react";
import Result from "../components/Result";

const ResultPage = ({ answers }) => {
  return (
    <div>
      <h1>Character Type Testing</h1>
      <Result answers={answers} />
    </div>
  );
};

export default ResultPage;
