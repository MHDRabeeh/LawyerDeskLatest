import React from "react";
import user from "../assets/user.png";
import { MdBrush } from "react-icons/md";
import { AiFillStar, AiOutlineRight, AiFillCamera } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

const Header = () => {
  return (
    <div className=" mb-[3rem]  h-[250px] md:h-[280px] sm:h-[250px]">
      <div className="h-[100px] sm:h-[120px] md:h-[150px]  mx-0 bg-white rounded-t-lg rounded-b-[30px] sm:rounded-b-[40px] md:rounded-b-[60px] relative ">
        <div className="absolute flex flex-col md:flex-row md:items-end justify-center md:justify-start items-center bottom-[-150%] sm:bottom-[-120%] md:bottom-[-100%] w-full md:px-[10%]">
          <div className="text-center flex flex-col items-center z-20 ">
            <div className="relative">
              <img
                src={user}
                alt="man pic"
                className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-full "
              />
              <span
                className="p-1 sm:p-2 bg-yellow rounded-full ml-[10px] text-[0.9rem] absolute bottom-0 right-0 sm:right-4 md:right-6"
                style={{ backgroundColor: "#ffcc00" }}
              >
                <AiFillCamera />
              </span>
            </div>
            <h2
              className="text-black  text-xs sm:text-xl md:text-xl mt-2 flex  items-center "
              style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
            >
              Joseph Cotchett
              <span
                className="p-1 bg-yellow rounded-full ml-[10px] text-[0.9rem]"
                style={{ backgroundColor: "#ffcc00" }}
              >
                <GrEdit />
              </span>
            </h2>
            <p className="text-text-secondary text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] italic">
              Family, Corporate, Property Expert
            </p>
          </div>

          <div className="mt-4 flex items-center md:ml-[50px]">
            <div className="bg-white rounded-md text-[0.9rem] sm:text-[1.1rem] flex items-center z-20 overflow-hidden mr-[20px]">
              <span className="border-2 py-1 px-3 border-r-gray-light border-l-white border-t-white border-b-white ">
                Total Cases
              </span>
              <span className="py-1 px-3">124</span>
            </div>
            <div className="flex ">
              <span
                className="w-[25px] h-[25px] rounded-full bg-yellow flex items-center justify-center mr-[5px]"
                style={{ backgroundColor: "#ffcc00" }}
              >
                <AiFillStar className="text-white" />
              </span>
              <span
                className="w-[25px] h-[25px] rounded-full bg-yellow block mr-[5px]"
                style={{ backgroundColor: "#ffcc00" }}
              ></span>
              <span
                className="w-[25px] h-[25px] rounded-full bg-yellow block mr-[5px]"
                style={{ backgroundColor: "#ffcc00" }}
              ></span>
            </div>
            <div className="">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
