import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import elon from "../assets/elon.png";
import person2 from "../assets/person_pic2 1.png";
import person3 from "../assets/person_pic 1.png";
import person4 from "../assets/person_pic5 1.png";
import { useNavigate } from "react-router-dom";

const ChatHistory = () => {
  const navigate = useNavigate();
  const chatdata = [
    {
      id: 1,
      image: elon,
      name: "Elon Musk",
      msg: "Hey Joseph, How are you?",
      unreadmsg: "1",
      online: true,
    },
    {
      id: 1,
      image: person2,
      name: "David v",
      msg: "Good Morning",
      unreadmsg: "3",
      online: false,
    },
    {
      id: 1,
      image: person3,
      name: "Joe",
      msg: "Hey Joseph",
      unreadmsg: "3",
      online: true,
    },
    {
      id: 1,
      image: person4,
      name: "Jenny s",
      msg: "Hello",
      unreadmsg: "1",
      online: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center md:p-5">
      <div className="flex flex-row items-center gap-3 md:p-5 bg-white md:w-3/4 w-[95%] p-3 rounded-lg shadow-lg" style={{fontFamily:"Urbanist",fontWeight:"590"}}>
        <BsSearch size={25} color="gray" />
        <input type="text" placeholder="Search...."  />
      </div>

      <div className="flex flex-col gap-5 md:p-5 h-screen md:h-fit  mt-5 bg-white md:w-3/4 w-[95%]  rounded-lg shadow-lg">
        {/* {chatdata.map((item) => {
          return (
            <div className="flex flex-row  w-full items-center justify-between border-b p-3 cursor-pointer">
              <div className="flex flex-row gap-5 justify-between">
                <div
                  className={`  ${
                    item.online
                      ? "border-green-600 border-[3px]"
                      : "border-[1px] border-gray-200"
                  } rounded-lg `}
                >
                  <img src={item.image} alt="img" className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.msg}</p>
                </div>
              </div>
              <div className="bg-yellow rounded-full w-6 h-6 flex justify-center items-center">
                {item.unreadmsg}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default ChatHistory;
