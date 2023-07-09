import React from "react";
import { GoLaw } from "react-icons/go";
import { MdManageSearch } from "react-icons/md";
import InputResult from "../components/InputResult";
import Navbar from "../components/Navbar";

const LawsNrules = () => {
  return (
    <>
     <div>
        <Navbar/>
      </div>
    <div className="p-3" >
      {/* logo head */}
      <div className="flex flex-row items-center gap-4 ">
        <div className="bg-[#0099FF] w-[2rem] flex justify-center items-center rounded-lg">
          <GoLaw size={30} />
        </div>
        <p className="font-bold text-xl" style={{fontFamily:"urbanist"}}>Laws & Rules</p>
      </div>

      {/* sub container */}

      <div className="bg-[#f1f5f9] p-4 mt-5 rounded-lg grid grid-cols-3 gap-4 ">
       
            <div className="mt-5 p-3 rounded-lg   shadow-lg max-h-48 shadow-xl bg-[#f1f5f9]"></div>
         {/* input result section */}
         <InputResult />

        <div className="bg-[#f1f5f9]  rounded-lg p-2 box-border  shadow-2xl mt-4 max-h-48">
          <div className="flex flex-row items-center justify-center gap-4 w-fit" >
            <MdManageSearch className="md:w-9  md:h-9 " size={50} />
            <p className="font-semibold" style={{fontFamily:"urbanist"}}>
              Search for a specific law or the context to get relevent suggestions
            </p>
          </div>

          {/* search area */}

          <div className="flex flex-col gap-4 mt-4 items-center">
            <input
              type="text"
              placeholder="Enter your query"
              className="border rounded-lg h-10 md:w-[28rem] p-1"
            />
            <button className="bg-[#0099FF] rounded-full px-7 py-1 w-3/5 p-1 ">
              <span className="text-white" style={{fontFamily:"urbanist"}}>Find </span>
              <span className="font-semibold text-white" >Laws, Rules & Documents</span>
            </button>
          </div>
        </div>



      </div>
    </div>
    </>
  );
};

export default LawsNrules;
