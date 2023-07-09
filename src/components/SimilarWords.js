import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SimilarWords = ({data}) => {
    const [showResult, setShowResult] = useState(false);

    const handleView = () => {
        setShowResult(!showResult);
      };
  return (
    data.map((item)=>{
        return(
            <div className="mt-5 p-3 rounded-lg  outline outline-offset-0 outline-[#0099FF] shadow-lg bg-white">
            <div className="flex justify-between items-center"onClick={handleView}>
              <p className="font-semibold" style={{fontFamily:"urbanist",fontWeight:'bold'}}>{item.term}</p>
              <div
                className="bg-[#0099FF] text-white rounded-full w-fit drop-shadow-lg flex items-center cursor-pointer"
                
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
                  <p className="text-sm italic" style={{fontFamily:"urbanist",fontWeight:'500'}}>
                   {item.info}
                  </p>
                </div>
               
              </>
            ) : (
              ""
            )}
          </div>
        )
    })
    
  )
}

export default SimilarWords