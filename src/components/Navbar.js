import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import logo from "../assets/lawyer_desk_logo 1.png";
import user from "../assets/user.png";
import { ImHome } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { HiBuildingLibrary } from "react-icons/hi2";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import NotificationDropdown from "../components/Notifiction";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#0099ff]  py-4 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-5 gap-8  justify-between  w-[30rem]">
          <img src={logo} alt="Logo" className="h-11 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-white py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-8">
          <a
            href="/home"
            className="text-white font-semibold flex flex-col items-center justify-between gap-2"
          >
            <ImHome size={22} />
            <p className="text-sm">Home</p>
          </a>
          <a
            href="/findlawyers"
            className="text-white font-semibold  flex flex-col items-center justify-between gap-2"
          >
            <FaUserFriends size={25} />
            <p className="text-sm">Find Lawyers</p>
          </a>
          <a
            href="/research"
            className="text-white font-semibold  flex flex-col items-center justify-between gap-2"
          >
            <HiBuildingLibrary size={25} />
            <p className="text-sm">Legal Research</p>
          </a>
          <a
            href="/chats"
            className="text-white font-semibold  flex flex-col items-center justify-between gap-2"
          >
            <BsFillChatLeftTextFill size={20} />
            <p className="text-sm">Messages</p>
          </a>
          <a className="text-white  font-semibold  flex flex-col items-center justify-between gap-2">
            {/* <MdNotifications size={25} /> */}
            <NotificationDropdown />
            <p className="text-sm">Notifications</p>
          </a>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="text-black font-semibold focus:outline-none"
            >
              {/* <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" /> */}
              <img src={user} alt="" className="h-9 w-9" />
            </button>
            <Transition
              show={isDropdownOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                <a href="/profile" className="block px-4 py-2 text-gray-800" style={{fontFamily:"Urbanist",fontWeight:"bold"}}>
                  My Profile
                </a>
                <a href="/settings" className="block px-4 py-2 text-gray-800" style={{fontFamily:"Urbanist",fontWeight:"bold"}}>
                  Settings
                </a>
                <a href="/" className="block px-4 py-2 text-gray-800" style={{fontFamily:"Urbanist",fontWeight:"bold"}}>
                  Logout
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;