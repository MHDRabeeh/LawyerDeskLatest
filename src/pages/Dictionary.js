import React from "react";
import { MdManageSearch } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import DictionaryResult from "../components/DictionaryResult";
import { dictionaryData } from "../data";
import SimilarWords from "../components/SimilarWords";
import Navbar from "../components/Navbar";

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
  const data = [kidnapping, coercion, assault, battery, imprisonment];
  return (
    <>
      <Navbar />
      <div className="p-3 ">
        {/* logo head */}
        <div className="flex flex-row items-center gap-4 ">
          <div className="bg-[#0099FF]  w-fit md:p-3 p-1 flex justify-center items-center rounded-lg">
            <FaBook size={30} />
          </div>
          <p
            className="font-bold text-xl"
            style={{ fontFamily: "urbanist", fontWeight: "bold" }}
          >
            Dictionary
          </p>
        </div>
        {/* sub container */}

        <div className="bg-[#f1f5f9] p-4  rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-4  content-start">
          <div className="bg-[#f1f5f9]  rounded-lg p-2 box-border  shadow-2xl mt-4 max-h-48 lg:order-last">
            <div className="flex flex-row items-center justify-center gap-4 w-fit ">
              <MdManageSearch className="md:w-9 md:h-9 " size={50} />

              <p
                className="font-semibold text-sm md:text-base"
                style={{ fontFamily: "urbanist", fontWeight: "bold" }}
              >
                Search for a word or approximate meaning to get relevant words
              </p>
            </div>
            {/* search area */}
            <div className="flex  flex-col gap-4 mt-4 items-center">
              <input
                type="text"
                placeholder="  Enter your query"
                className="border rounded-lg h-10 w-full"
              />
              <button className=" bg-[#0099FF] text-white  rounded-full px-7 py-2 md:w-auto w-3/4 ">
                <span style={{ fontFamily: "Open Sans", fontWeight: "500" }}>
                  Find{" "}
                </span>
                <span className="font-bold " style={{ fontFamily: "urbanist" }}>
                  Legal Terminology
                </span>
              </button>
            </div>
          </div>

          <div className="mt-5 p-3 rounded-lg h-48  shadow-lg max-h-48 shadow-xl bg-[#f1f5f9]"></div>



          {/* input result section */}
          <div className="mt-5 p-3 rounded-lg  min-h-48 max-h-[79vh] overflow-y-scroll  outline outline-offset-0 outline-[#0099FF] shadow-lg bg-[#f1f5f9]">
            <DictionaryResult abduction={abduction} />
            <div className="border-b-2  py-5 flex items-center justify-start">
              <p
                className="font-semibold"
                style={{ fontFamily: "urbanist", fontWeight: "bold" }}
              >
                Other Similar Words / Meanings
              </p>
            </div>
            <SimilarWords data={data} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Dictionary;
