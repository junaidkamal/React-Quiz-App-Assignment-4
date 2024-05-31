import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (selectedOption: any) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAns) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          {!quizCompleted ? (
            <div className="border shadow rounded p-4">
              <div className="text-center fs-1 text-info bg-danger p-3 mb-4">
                Quiz App
              </div>
              <p className="fs-5 text-white">
                Question {currentQuestionIndex + 1}/{questions.length}
              </p>
              <h4 className="mb-4 text-nfo">
                {questions[currentQuestionIndex].question}
              </h4>
              <div className="row">
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <button
                        onClick={() => handleOptionClick(option)}
                        className="btn btn-dark w-100 text-success"
                      >
                        {option}
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="text-center mt-4">
              <h2 className="text-info fs-1">Quiz Completed!</h2>
              <p className="text-dark fs-3">
                Your Result: {score} / {questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;