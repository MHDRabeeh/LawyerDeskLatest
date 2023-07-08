import React from "react";
import logo from "../assets/lawyer_desk_logo 1.png";
import { useNavigate } from "react-router-dom";

const PhNumber = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between w-[100%]">
      <div className="mt-[4rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white md:w-[28rem] w-[90%]  flex flex-col justify-center px-5 rounded-xl  shadow-[0_-5px_90px_-20px] shadow-gray-500 mt-[5rem]">
        <h1 className="text-xl mt-[2rem] font-bold " style={{fontFamily:"Urbanist",fontWeight:'bold'}}>Enter Phone Number</h1>
        <p className="text-gray-500 mt-3" style={{fontFamily:"Urbanist",fontWeight:'590'}}>
          You will receive a 6 digit code to verify next.
        </p>
        <div className="mt-5 flex ">
          <input
            type="text"
            className="bg-[#F0F5FA] w-[3rem] h-[3rem] font-bold rounded-lg text-center" style={{fontFamily:"Urbanist"}}
            value="+91"
            required
          />
          <input
            type="tel"
            className="bg-[#F0F5FA] h-[3rem] ml-3 px-2 font-bold rounded-lg" style={{fontFamily:"Urbanist"}}
            placeholder="Mobile Number"
            required
            maxLength="10"
          />
        </div>
        <div className="mt-[4rem] mb-[4rem]">
          <button
            className="font-bold bg-[#0099FF] rounded-full p-2 w-[18rem]"
            onClick={() => navigate("/otpVerify")} style={{color:'white',fontFamily:"Urbanist"}}
          >
            SENT  OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhNumber;
