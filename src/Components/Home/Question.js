import React, { useState } from "react";

function Question(props) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" py-3 border-b-[1px] border-[#D7D7D7] mt-2">
      <div className="flex justify-between">
        <p> {props.questions} </p>
        <span onClick={toggleHandler} className=" cursor-pointer">
          {toggle ? "-" : "+"}
        </span>
      </div>
      {toggle ? (
        <p className="my-3 text-sm text-[#617275]">{props.answer}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Question;
