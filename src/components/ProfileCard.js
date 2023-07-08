import React from 'react'
import user from "../assets/user.png";
import { MdBrush } from "react-icons/md";
import { AiFillStar, AiOutlineRight, AiFillCamera } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

import { specialization } from "../data";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const ProfileCard = () => {
  return (
    <div>
    <div className=" mb-[3rem]  h-[250px]">
      <div className="h-[100px]   mx-0 bg-white rounded-t-lg rounded-b-[30px]  relative ">
        <div className="absolute flex flex-col  justify-center  items-center bottom-[-150%]   w-full ">
          <div className="text-center flex flex-col items-center z-20 ">
            <div className="relative">
              <img
                src={user}
                alt="man pic"
                className="w-[100px] h-[100px]  rounded-full "
              />
              <span
                className="p-1 sm:p-2 bg-[#546bf1] rounded-full ml-[10px] text-[0.9rem] absolute bottom-0 right-0 sm:right-4 md:right-6"
                style={{ backgroundColor: "#0099ff",color:'white' }}
              >
                <AiFillCamera />
              </span>
            </div>
            <h2
              className="text-black  text-[1.2rem]  mt-2 flex  items-center "
              style={{ fontFamily: "Urbanist ", fontWeight: "bold" }}
            >
              Joseph Cotchett
              <span
                className="p-1 bg-[#0099ff] rounded-full ml-[10px] text-[0.9rem]"
                style={{ backgroundColor: "#0099ff"}}
              >
                <GrEdit />
              </span>
            </h2>
            <p className="text-text-secondary text-[0.7rem]  italic" style={{fontFamily:"Urbanist",fontStyle:"italic",fontWeight:"600"}}>
              Family, Corporate, Property Expert
            </p>
          </div>

          <div className="mt-4 flex items-center">
            <div className="bg-white rounded-md text-[0.9rem]  flex items-center z-20 overflow-hidden mr-[20px]">
              <span className="border-2 py-1 px-3 border-r-gray-light border-l-white border-t-white border-b-white " style={{fontFamily:"Urbanist",fontWeight:"600"}}>
                Total Cases
              </span>
              <span className="py-1 px-3" style={{fontFamily:"Urbanist",fontWeight:"600"}}>124</span>
            </div>
            <div className="flex ">
              <span
                className="w-[25px] h-[25px] rounded-full bg-yellow flex items-center justify-center mr-[5px]"
                style={{ backgroundColor: "#0099ff" }}
              >
                <AiFillStar className="text-white" />
              </span>
              <span
                className="w-[25px] h-[25px] rounded-full bg-[#546bf1] block mr-[5px]"
                style={{ backgroundColor: "#0099ff" }}
              ></span>
              <span
                className="w-[25px] h-[25px] rounded-full bg-[#546bf1] block mr-[5px]"
                style={{ backgroundColor: "#0099ff" }}
              ></span>
            </div>
            <div className="">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* details */}
    </div>
  )
}

export default ProfileCard