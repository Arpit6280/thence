import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex justify-between rounded-[3rem] border-[1px]">
        <div className="flex items-center ">
          <h3 className="text-4xl ml-12 font-bold">Brunel</h3>
        </div>
        <div className="my-4">
          <button className="py-3 px-8 border-[1px] rounded-[30px] mr-4 text-lg hover:bg-[#F1F1F1] ">
            {" "}
            <NavLink to="/registration">Get Projects</NavLink>
          </button>
          <button className="py-3 px-8 border-[1px] rounded-[30px] mr-4  text-white text-lg bg-black hover:bg-[#4E4E4E]">
            Onboard Talent
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
