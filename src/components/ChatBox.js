import React,{useState,useEffect,useRef} from "react";
import InputEmoji from 'react-input-emoji'
import {IoCall} from 'react-icons/io5'
import {BsCameraVideoFill} from 'react-icons/bs'
import {BiSend} from 'react-icons/bi'
import {BiArrowBack} from 'react-icons/bi'
import { format } from "timeago.js";
import elon from '../assets/elon.png'
import '../components/ChatBox.css'
import { useNavigate } from "react-router-dom";

 
const ChatBox = ({chatData}) => {
  const navigate = useNavigate()
  const scroll = useRef();
  
  const messages = [{
    senderId:1,text:"Hello"},
    {senderId:2,text:"Hey Elon"},
    {senderId:1,text:"Hey joseph, how are you?"}
]
  //scroll last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="md:py-4 md:px-3 px-1 flex flex-col justify-between h-[90vh]">
      {/* top */}
      <div className="flex flex-row  items-center justify-between bg-white px-7 py-4 rounded-lg shadow-lg">
        <div className="flex flex-row gap-5 items-center">
          <BiArrowBack size={25} className="md:hidden bg-[#0099FF] rounded-lg" onClick={()=>navigate('/Chats')}/>
          <div>
            <img src={elon} alt="img" className=""/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-medium" style={{fontFamily:"Urbanist",fontWeight:"600"}}>Elon Musk</p>
            <p className="text-gray-400 text-xs" style={{fontFamily:"Urbanist",fontWeight:"590",fontSize:"13px"}}>typing...</p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <BsCameraVideoFill size={25}/>
          <IoCall size={25}/>
        </div>
      </div>
      {/* message area */}
      <div className="flex flex-col gap-[1rem]">
      {messages.map((message) => (
                <>
                  <div
                    ref={scroll}
                    className={
                      message.senderId === 2
                        ? "own message bg-[#0099FF]"
                        : "message bg-white"
                    }
                  >
                    <span style={{fontFamily:"Urbanist",fontWeight:'590'}}>{message.text}</span>
                    <span style={{fontFamily:"Urbanist",fontWeight:'600'}}>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
      </div>
      {/* bottom */}
      <div >
        <div className="flex flex-row items-center pr-3 bg-white rounded-lg m-2 ">
          {/* <input type="text" placeholder="write your message" className="" size={50}/> */}
          {/* <EmojiTextField/> */}
          <InputEmoji />
          <BiSend size={30} className="cursor-pointer bg-[#0099FF] rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
