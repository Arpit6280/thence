import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();
  let isFormFilled = false;
  console.log(isFormFilled);
  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length <= 2) {
      setIsNameValid(false);
      return;
    }
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let result = res.test(String(email).toLowerCase());
    if (!result) {
      setIsEmailValid(false);
      return;
    }
    navigate("/success", { replace: true });
  };
  if (name.length && email.length) isFormFilled = true;
  return (
    <div>
      <nav className="flex justify-between  ">
        <div className="flex items-center ">
          <h3 className="text-4xl ml-12 font-bold">Brunel</h3>
        </div>
        <div className="my-4">
          <NavLink to="/">
            <button className="mt-1 border-[1px] w-10 h-10 rounded-full mr-4  hover:bg-[#F1F1F1]">
              <IoCloseOutline className="text-2xl ml-[7px]" />
            </button>
          </NavLink>
        </div>
      </nav>

      <div className="flex justify-center my-8">
        <div className="w-1/4 text-center">
          <h5 className="mb-1 font-coveredby text-[#2DA950] font-medium text-lg">
            Registration Form
          </h5>
          <h1 className="mb-6 text-3xl font-semibold">
            Start your success <br /> Journey here!
          </h1>
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#EFEFEF] rounded-3xl w-[70%] text-[12px]  py-3 px-5 my-2 outline-0 focus:bg-sky-100 focus:border-[1px] focus:border-[#537FF1]"
                value={name}
                onChange={nameInputHandler}
              />
              {isNameValid ? (
                ""
              ) : (
                <p className="text-[#FF0808] text-[10px] w-[90%] font-semibold ">
                  {" "}
                  <span className="w-[10px] h-[10px] bg-red-500 rounded-full inline-block mr-[6px]">
                    <FaExclamation className="text-white h-2  mt-[1px]" />{" "}
                  </span>
                  Name should contain atleast 3 character
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#EFEFEF] rounded-3xl  w-[70%] text-[12px]  py-3 px-5 my-2 outline-0 focus:bg-sky-100 focus:border-[1px] focus:border-[#537FF1]"
                value={email}
                onChange={emailInputHandler}
              />
              {isEmailValid ? (
                ""
              ) : (
                <p className="text-[#FF0808] text-[10px] w-[70%] font-semibold ">
                  {" "}
                  <span className="w-[10px] h-[10px] bg-red-500 rounded-full inline-block mr-[6px]">
                    <FaExclamation className="text-white h-2  mt-[1px]" />{" "}
                  </span>
                  Enter a valid email address
                </p>
              )}
            </div>

            <button
              onClick={submitHandler}
              type="submit"
              className={`${
                isFormFilled ? "bg-black" : "bg-[#C9C9C9]"
              }  rounded-3xl  w-[70%] text-[12px] text-[#FFF] py-3 px-5 my-6`}
              disabled={!isFormFilled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
