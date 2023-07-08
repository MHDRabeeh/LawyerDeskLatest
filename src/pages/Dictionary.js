import React from "react";
import { MdManageSearch } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import DictionaryResult from "../components/DictionaryResult";
import { dictionaryData } from "../data";
import SimilarWords from "../components/SimilarWords";

const extractDataById = (id) => {
  const foundObject = dictionaryData.find((obj) => obj.id === id);
  return foundObject ? foundObject : null;
};
const Dictionary = () => {
  const abduction = extractDataById(1);
  const kidnapping = extractDataById(2);
  const coercion = extractDataById(3);
  const assault = extractDataById(4);
  const battery = extractDataById(5);
  const imprisonment = extractDataById(6);
  const data = [kidnapping,coercion,assault,battery,imprisonment]
  return (
    <div className="p-3">
      {/* logo head */}
      <div className="flex flex-row items-center gap-4 ">
        <div className="bg-[#FFCC00] w-fit md:p-3 p-1 p-1flex justify-center items-center rounded-lg" style={{backgroundColor:"#ffcc00"}}>
          <FaBook size={30} />
        </div>
        <p className="font-bold text-xl" style={{fontFamily:"Open Sans",fontWeight:'bold'}}>Dictionary</p>
      </div>
      {/* sub container */}
      <div className="bg-white p-4 mt-5 rounded-lg">
        <div className="flex flex-row items-center justify-center gap-4 w-fit">
          <MdManageSearch className="md:w-9 md:h-9 " size={50} />
          <p className="font-semibold text-sm md:text-base" style={{fontFamily:"Open Sans",fontWeight:'bold'}}>
            Search for a word or approximate meaning to get relevant words
          </p>
        </div>
        {/* search area */}
        <div className="flex md:flex-row flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="  Enter your query"
            className="border rounded-lg h-10 md:w-[35rem]"
          />
          <button className="bg-yellow rounded-full px-7 py-1" style={{backgroundColor:"#ffcc00"}}>
            <span style={{fontFamily:"Open Sans",fontWeight:'500'}}>Find </span>
            <span className="font-semibold" style={{fontFamily:"Open Sans",fontWeight:'bold'}}>Legal Terminology</span>
          </button>
        </div>
        {/* input result section */}
        <DictionaryResult abduction={abduction} />
        <div className="border-b-2  py-5 flex items-center justify-start">
          <p className="font-semibold" style={{fontFamily:"Open Sans",fontWeight:'bold'}}>Other Similar Words / Meanings</p>
        </div>
        <SimilarWords data={data}/>
      </div>
    </div>
  );
};

export default Dictionary;
