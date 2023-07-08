import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {HiUserCircle} from 'react-icons/hi'

const SignUpSubmit = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between w-[100%]">
      <div className="mt-[4rem]  w-{52px} h-{25px} ">
        {/* <FaUserAlt className="self-center " size={90}/> */}
        <HiUserCircle size={150} color="#818181"/>
      </div>
      <div className="bg-white  md:w-[28rem] w-[90%]  flex flex-col gap-7 justify-center  p-5 rounded-xl  shadow-[0_-5px_90px_-20px] shadow-gray-500 mt-[5rem]">
        <div className="relative mt-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full shadow-lg h-14 pl-10 pr-4 py-2 bg-background-blue rounded-lg" style={{fontFamily:"Urbanist",fontWeight:"bold"    }}
          />
          <span className="absolute left-3 top-4">
            <FaUserAlt size={20} color="#818181" />
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full shadow-lg h-14 pl-10 pr-4 py-2 bg-background-blue rounded-lg" style={{fontFamily:"Urbanist",fontWeight:"bold"}}
          />
          <span className="absolute left-3 top-4">
            <FaUserAlt size={20} color="#818181" />
          </span>
        </div>

        <div className="relative ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-14 pl-10 pr-4 py-2 bg-background-blue shadow-lg rounded-lg" style={{fontFamily:"Urbanist",fontWeight:"bold"}}
          />
          <span className="absolute left-3 top-4">
            <MdEmail size={25} color="#818181" />
          </span>
        </div>

        <div className="mt-5 mb-[1rem] flex justify-center items-center">
          <button
            className="font-bold bg-[#0099FF] rounded-full p-2 w-[18rem]"
            onClick={() => navigate("/home")} style={{color:"white",fontFamily:"Urbanist",fontWeight:"bold"}} 
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSubmit;
