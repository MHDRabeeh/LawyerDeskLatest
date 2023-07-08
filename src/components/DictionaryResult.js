import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DictionaryResult = ({abduction}) => {
  const [showResult, setShowResult] = useState(false);

  const handleView = () => {
    setShowResult(!showResult);
  };
  return (
    <div className="mt-5 p-3 rounded-lg  outline outline-offset-0 outline-[#FFCC00] shadow-lg">
      <div className="flex justify-between items-center"onClick={handleView}>
        <p className="font-semibold">{abduction.term}</p>
        <div
          className="bg-yellow rounded-full w-fit drop-shadow-lg flex items-center cursor-pointer"
          
        >
          {showResult ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </div>
      </div>
      {showResult ? (
        <>
          <div className="mt-3">
            <p className="text-sm italic">
             {abduction.info}
            </p>
          </div>
         
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DictionaryResult;
