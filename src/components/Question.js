import React from "react";

const Question = ({ question, options, selectedOption, onOptionSelect }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options && options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => onOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
