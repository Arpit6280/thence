import React from "react";
import heroImage from "../../Images/hero.png";
import rocket from "../../Images/rocket.png";
import spark from "../../Images/spark.png";
import { FaRegCircle } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="px-10 ">
      <section className="text-center my-4 ">
        <h6 className="text-[#2DA950]  font-coveredby font-medium text-xl">
          Success stories
        </h6>
        <p className="text-4xl font-medium">
          Every success journey <br /> we've encountered{" "}
        </p>
      </section>
      <section className="flex justify-around mt-8">
        <div className="relative text-left">
          <div className="absolute top-[20%] left-[6%] bg-white  pb-7 px-4 rounded-2xl shadow-lg ease-in-out duration-1000 hover:scale-105 hover:bg-[#F1F1F1]">
            <img src={spark} alt="" className="w-16" />{" "}
            <span className="absolute top-[15%] left-[20%] text-4xl">40%</span>
            <p className="text-[#828282] text-sm mt-8">
              Achived reduction in <br /> project execution time <br /> by
              optimising team <br />
              availability
            </p>
          </div>
          <div className="w-[190px]  absolute top-[77%] left-[15%] bg-white shadow-lg px-3 py-2 rounded-[30px] ease-in-out duration-1000 hover:scale-105 hover:bg-[#F1F1F1]">
            <div className="flex">
              <span className="bg-[#DDEFE0] w-10 h-10 rounded-full">
                <img src={rocket} alt="" className="w-6 h-6 mt-[20%] mx-auto" />
              </span>

              <p className="text-[#828282] text-[12px] ml-3">
                <span className="text-lg font-semibold text-black">
                  {" "}
                  10 DAYS{" "}
                </span>{" "}
                <br /> Staff Deployment
              </p>
            </div>
          </div>
          <div className="w-[200px] py-7 px-4  absolute bg-[#002E18] left-[72%] top-[68%] rounded-2xl ease-in-out duration-1000 hover:scale-105 hover:bg-[#285841]">
            <h1 className="text-[#CCCCCC] ">
              {" "}
              <span className="text-4xl font-semibold text-center text-white">
                {" "}
                $0.5
              </span>{" "}
              MILLION
            </h1>
            <p className=" mt-3 mx-auto  text-sm text-[#CCCCCC]">
              Reduced client expenses <br />
              by saving on hiring and <br />
              employee costs.
            </p>
          </div>
          <img
            src={heroImage}
            alt=""
            className="rounded-3xl h-[400px] ml-32 "
          />
        </div>
        <div className="relative left-[-15%] ">
          <p className="text-left text-2xl font-semibold relative top-[15%]">
            Enhance fortune 50 <br /> company's insight <br /> team researcher{" "}
            <br /> capabilities
            <div className="mt-6 flex  gap-2">
              <span className="text-[8px] bg-[#2DA950] rounded-full border-0">
                <FaRegCircle />
              </span>
              <span className="text-[8px] bg-[#E4E3E3] hover:bg-[#CAD0CB] rounded-full">
                <FaRegCircle />
              </span>
              <span className="text-[8px] bg-[#E4E3E3] hover:bg-[#CAD0CB] rounded-full">
                <FaRegCircle />
              </span>
            </div>
          </p>

          <div className="relative top-[58%]">
            <button className="bg-black py-4 px-6 rounded-[30px] text-white hover:bg-[#4E4E4E]">
              Explore More &#8594;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
