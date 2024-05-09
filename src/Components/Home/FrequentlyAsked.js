import React from "react";
import Question from "./Question";
import union from "../../Images/Union.png";

function FrequentlyAsked() {
  const questionArr = [
    {
      question: " Do you Offer Frelancers",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo modi aliquam. Neque, amet corrupti! Eum fuga ipsum laudantium officiis earum magnam.",
    },
    {
      question:
        "What's the guarantee that I will be satisfied with the hiredtalent?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo modi aliquam. Neque, amet corrupti! Eum fuga ipsum laudantium officiis earum magnam.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow  for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo modi aliquam. Neque, amet corrupti! Eum fuga ipsum laudantium officiis earum magnam.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo modi aliquam. Neque, amet corrupti! Eum fuga ipsum laudantium officiis earum magnam.",
    },
  ];
  return (
    <div className="bg-[#E8EEE7]   mt-20 mx-auto rounded-2xl">
      <div className="flex justify-between pl-44 pr-12">
        <section className="pt-14 text-left">
          <p className=" font-coveredby text-[#9E9D9D] text-lg">
            What's on your mind
          </p>
          <h2 className=" text-5xl">Ask Questions</h2>
          <img src={union} alt="" className="min-h-[200px] h-[220px] my-10" />
        </section>

        <section className="pt-20 text-left  w-1/2">
          {questionArr.map((ques) => (
            <Question questions={ques.question} answer={ques.answer} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default FrequentlyAsked;
