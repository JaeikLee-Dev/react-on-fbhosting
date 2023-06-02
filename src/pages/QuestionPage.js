import React, { useState } from "react";
import questionsData from "../data/questions.json";
import Question from "../components/Question";
import ResultPage from "./ResultPage";

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleOptionSelect = (selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Render the final result page if all questions are answered
  if (currentQuestionIndex >= questionsData.length) {
    return <ResultPage answers={answers} />;
  } else {
    return (
      <div>
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOption={answers[currentQuestionIndex]}
          onOptionSelect={handleOptionSelect}
        />
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  }
};

export default QuestionPage;
