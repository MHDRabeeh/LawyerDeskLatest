import { React, useState } from "react";
import logo from "../assets/lawyer_desk_logo 1.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("PUBLIC");
  const [selectedButton, setSelectedButton] = useState("public");

  const handleClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <div className="flex flex-col items-center justify-between w-[100%]">
      <div className="mt-[4rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white md:w-[28rem] w-[90%]  flex flex-col justify-center  items-center rounded-xl  shadow-[0_-5px_90px_-20px] shadow-gray-500 mt-[5rem]">
        <h2 className="text-xl mt-[2rem] font-bold " style={{fontFamily:"Urbanist",fontWeight:'bold'}}>
          JOIN AS PUBLIC OR LAWYER
        </h2>
        <div className="flex flex-row justify-between  rounded-full bg-[#F0F5FA] mt-[4rem] w-[14rem]">
          <button
            className={`bg-${
              selectedButton === "public" ? "[#0099FF]" : "[#F0F5FA]"
            } rounded-full w-[8rem] p-3 font-bold`}
            onClick={() => {
              setLoginType("PUBLIC");
              handleClick("public");
            }} style={{fontFamily:"Urbanist",fontWeight:'bold',color:'black'}}
          >
            PUBLIC
          </button>
          <button
            className={`bg-${
              selectedButton === "lawyer" ? "[#0099FF]" : "[#F0F5FA]"
            } rounded-full w-[8rem] p-3 font-bold`}
            onClick={() => {
              setLoginType("LAWYER");
              handleClick("lawyer");
            }} style={{fontFamily:"Urbanist",fontWeight:'bold'}}
          >
            LAWYER
          </button>
        </div>
        <div className="mt-[4rem] mb-[4rem]">
          <button
            className="font-bold bg-[#0099FF] rounded-full p-2 w-[18rem]"
            onClick={() => navigate("/signingPhase")} style={{fontFamily:"Urbanist",fontWeight:'bold',color:'white'}}
          >
            JOIN AS {loginType}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
