import React,{useState} from "react";
import elon from "../assets/elon.png";
import person2 from "../assets/person_pic2 1.png";
import person3 from "../assets/person_pic 1.png";
import person4 from "../assets/person_pic5 1.png";
import ChatHistory from "../components/ChatHistory";
import ChatBox from "../components/ChatBox";
import { BsSearch } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Navbar from "../components/Navbar";


const Chats = () => {
    const [chatSection, setChatSection] = useState(false);
    const [chatBoxSection, setChatBoxSection] = useState(true);
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



  const handleMobileview = () => {
    setChatSection(!chatSection);
    setChatBoxSection(!chatBoxSection);
  };

// function handleMobileview  (){
//     const chatsection = document.getElementById('chatsection');
//     const chatboxSection = document.getElementById('chatboxSection');
    
//     if (chatsection.classList.contains('hidden')) {
//       chatsection.classList.remove('hidden');
//       chatboxSection.classList.add('hidden');
//     } else {
//       chatsection.classList.add('hidden');
//       chatboxSection.classList.remove('hidden');
//     }
// }

  return (
    <div>
      <Navbar/>
    <div className="md:grid grid md:grid-cols-5 grid-cols-1">
      <div id={"chatsection"} className={`col-span-2 py-3 md:block  ${chatSection?'hidden':''}`} >
        <div className="flex flex-row items-center md:ml-[4rem] gap-3 md:p-5  md:w-3/4 w-[95%] p-3 ">
            <HiChatBubbleLeftRight className="bg-[#0099FF] rounded-lg " size={16} style={{backgroundColor:"#0099FF",height:"35px",width:"40px"}}/>
            <p className="font-semibold text-xl md:text-[2rem]" style={{fontFamily:"Urbanist",fontSize:"28px",fontWeight:"600"}}>Chats</p>
            </div>
        {/* <ChatHistory chatdata={chatdata} /> */}
        <div className="flex flex-col items-center justify-center md:p-4 ">
          <div className="flex flex-row items-center gap-3 md:p-5 bg-white md:w-3/4 w-[95%] p-3 rounded-lg shadow-lg" style={{fontFamily:'Urbanist',fontWeight:"600"}}>
            <BsSearch size={25} color="gray" />
            <input type="text" placeholder="Search...." />
          </div>
          <div className="flex flex-col gap-5 md:p-5 h-screen md:h-fit  mt-5 bg-white md:w-3/4 w-[95%]  rounded-lg shadow-lg">
          {chatdata.map((item) => {
          return (
            <div className="flex flex-row  w-full items-center justify-between border-b p-3 cursor-pointer" onClick={handleMobileview}>
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
                  <p className="font-medium" style={{fontFamily:"Urbanist",fontWeight:"600"}}>{item.name}</p>
                  <p className="text-gray-400 text-sm" style={{fontFamily:"Urbanist",fontWeight:"550"}}>{item.msg}</p>
                </div>
              </div>
              <div className="bg-[#0099FF] rounded-full w-6 h-6 flex justify-center items-center" style={{backgroundColor:"#0099FF",color:"white"}}>
                {item.unreadmsg}
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>
      <div id={"chatboxSection"} className={`md:col-span-3 col-span-2 w-full py-3 h-screen border-l  md:block ${chatBoxSection?'hidden':''}`}>
        {/* Content for the 60% section */}
        <ChatBox chatdata={chatdata} />
      </div>
    </div>
    </div>
  );
};

export default Chats;
