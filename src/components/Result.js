import React from "react";

const Result = ({ answers }) => {
  const answerValues = Object.values(answers);

  // Calculate the character type based on the answers
  // const calculateCharacterType = () => {
  //   // Example calculation based on the number of selected options
  //   const countA = answerValues.filter(
  //     (answer) => answer === "Option A"
  //   ).length;
  //   const countB = answerValues.filter(
  //     (answer) => answer === "Option B"
  //   ).length;

  //   if (countA > countB) {
  //     return "Character Type A";
  //   } else if (countB > countA) {
  //     return "Character Type B";
  //   } else {
  //     return "Undetermined Character Type";
  //   }
  // };

  // const characterType = calculateCharacterType();

  return (
    <div>
      <h2>Results</h2>
      {/* <p>Character Type: {characterType}</p> */}
      {answerValues &&
        answerValues.map((value, index) => (
          <p>
            Q{index}: {value}
          </p>
        ))}
    </div>
  );
};

export default Result;
