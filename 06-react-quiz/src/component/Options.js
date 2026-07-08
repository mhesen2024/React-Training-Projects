import React from "react";

export default function Options({ question, answer, dispatch }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`btn btn-option ${index === answer ? `answer` : ""}
          ${hasAnswer ? index === question.correctOption ? `correct` : `wrong` : ""}
          `}
           disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
