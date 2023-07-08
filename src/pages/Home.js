import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import CaseComponent from "../components/CaseComponent";
import HomeSecondrow from "../components/HomeSecondrow";
import RightSideHome from "../components/RightSideHome";
import Details from "../components/Details";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
// import NavbarHead from "../components/NavbarHead";

const Home = () => {
  const SrowData = [
    "Legal Updates",
    "Case Analysis",
    "Law Reforms",
    "Legal Opinions",
    "Compliance",
    "International Law",
    "Legal Tech",
    "Career Advice",
    "Legal Education",
    "Legal Ethics"
  ];

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 ">
        <Navbar />
      </div>

      {/* leftSide */}
      <div className="col-span-3 border-2 shadow-lg mt-14 ml-9 h-fit static rounded-lg p-4">
        <RightSideHome />
      </div>
      {/* Post section */}
      <div className="flex flex-col col-span-6 justify-center items-center mb-5 border-x-1  px-2 rounded-lg">
        


        <div className="bg-white h-[3rem]  rounded-lg flex flex-row w-[40rem] mt-1">
          <div className="bg-[#0099FF] rounded-lg w-[23rem] flex justify-center items-center shadow-lg" style={{fontFamily:"Urbanist",fontWeight:'bold'}}>
            <p style={{fontFamily: "Urbanist",fontWeight:'600',color:"white"}}>News Feed</p>
          </div>
          <div className="flex justify-center items-center w-[22rem] rounded-lg">
            <p style={{fontFamily: "Urbanist",fontWeight:'600',color:"black"}}>Other Updates</p>
          </div>
        </div>
        <div className="w-[40rem] px-3 h-[79vh] mt-2 shadow-lg border-x-2  overflow-y-scroll scrollbar-hide">
          <CaseComponent />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      {/* RightSide*/}
      <div className="col-span-3 border-2 shadow-lg mt-14 mr-9 rounded-lg h-fit p-5">
        <span className="">

        <HomeSecondrow SrowData={SrowData} />
        </span>
      </div>
    </div>
  );
};

export default Home;
