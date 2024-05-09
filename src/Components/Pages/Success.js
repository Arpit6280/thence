import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Success() {
  const [counter, setCounter] = useState(5);
  let navigate = useNavigate();
  useEffect(() => {
    if (counter === 0) navigate("/");
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="">
      <nav className="flex justify-between  ">
        <div className="flex items-center ">
          <h3 className="text-4xl ml-12 font-bold">Brunel</h3>
        </div>
      </nav>
      <div className="flex justify-center items-center h-[85vh] text-center">
        <div className="w-[30%]">
          <button className="w-8 h-8 my-2 mx-auto rounded-full bg-[#28B246] flex justify-center items-center">
            {" "}
            <FaCheck className="text-white" />{" "}
          </button>
          <p className="text-[#2DA950] font-medium font-coveredby text-lg">
            success submitted
          </p>
          <h1 className="text-2xl font-semibold mb-2">Congratulation</h1>
          <p className="text-[#727272]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <p className="my-2 mx-auto text-[#727272] text-center">
        Redirecting you to Homepage in{" "}
        <span className="font-semibold text-black">{counter} Seconds </span>{" "}
      </p>
    </div>
  );
}

export default Success;
