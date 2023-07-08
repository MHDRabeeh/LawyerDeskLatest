import React from "react";
import logo from "../assets/lawyer_desk_logo 1.png";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-between w-[100%]">
      <div className="mt-[4rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white md:w-[28rem] w-[90%]  flex flex-col justify-center px-5 rounded-xl  shadow-[0_-5px_90px_-20px] shadow-gray-500 mt-[5rem]">
        <h1 className="text-xl mt-[2rem] font-bold " style={{fontFamily:"Urbanist",fontWeight:'bold'}}>Enter Phone Number</h1>
        <p className="text-gray-500 mt-3" style={{fontFamily:"Urbanist",fontWeight:'520'}}>
          A 4 digit otp has send to +91 8921912219
        </p>
        <div class="flex mt-5">
          <input
            type="text"
            maxlength="1"
            className="shadow-lg bg-[#F0F5FA] w-12 h-12 text-center border border-gray-300 rounded-lg mr-2"
          />
          <input
            type="text"
            maxlength="1"
            className="shadow-lg bg-[#F0F5FA] w-12 h-12 text-center border border-gray-300 rounded-lg mr-2"
          />
          <input
            type="text"
            maxlength="1"
            className="shadow-lg bg-[#F0F5FA] w-12 h-12 text-center border border-gray-300 rounded-lg mr-2"
          />
          <input
            type="text"
            maxlength="1"
            className="shadow-lg bg-[#F0F5FA] w-12 h-12 text-center border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mt-[4rem] mb-[1rem] flex justify-center items-center">
          <button
            className="font-bold bg-[#0099FF] rounded-full p-2 w-[18rem]"
            onClick={() =>navigate("/userdetailsubmit")} style={{color:"white",fontFamily:'Urbanist'}}
          >
            VERIFY OTP
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-5">
          <p className="" style={{fontFamily:"Urbanist"}}>Don't receive otp?</p>
          <p className="font-bold text-[#0099FF]" style={{fontFamily:"Urbanist"}}>Resend OTP</p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
