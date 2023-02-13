import React from "react";
import "./questions.css";
import { QuestionsData } from "../../data";
import SectionHead from "./../SectionHead";
import QuestionBox from "./QuestionBox";

const Questions = () => {
  
  return (
    <div className="questions section-padding" id="faqs">
      <div className="container">
        <SectionHead
          sectionName="FAQs"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <div className="row gy-4">
          {QuestionsData.map((quesItem) => {
            return <QuestionBox key={quesItem.id} quesItem={quesItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
