import React from "react";
import { useState } from "react";

const QuestionBox = (props) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  
  return (
    <div className="col-md-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="question-box rounded p-4"
      >
        <div className="question d-flex align-items-center justify-content-between">
          <h5 className="m-0">{props.quesItem.question}</h5>
          <button
            onClick={() => setIsAnswerShowing((prev) => !prev)}
            className="question-btn rounded px-2 py-1"
          >
            {isAnswerShowing ? (
              <i className="fa-solid fa-minus"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}{" "}
          </button>
        </div>
        {isAnswerShowing && (
          <div className="answer mt-4 pt-2">
            <p>{props.quesItem.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
