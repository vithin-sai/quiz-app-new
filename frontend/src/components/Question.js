import React from "react";

function Question({ data, onAnswer }) {
  return (
    <div>
      <h3>{data.question}</h3>
      {data.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option.text)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
