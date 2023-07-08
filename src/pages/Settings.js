import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { MdPrivacyTip } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import user from "../assets/user.png";

const Settings = () => {
  return (
    <div className="md:grid md:grid-cols-5 p-3">
      <div className="col-span-5 flex flex-row items-center gap-5 md:text-[2rem]">
        <div className="bg-yellow flex justify-center items-center rounded-lg w-9 h-9">
          <IoSettingsSharp size={25} />
        </div>
        <div>
          <p className="font-semibold">Settings</p>
        </div>
      </div>
      {/* sidebar */}
      <div className="border border-r-2 md:col-span-1 bg-white p-3 rounded-lg mt-4 shadow-lg">
        <div className="flex flex-row items-center gap-5 p-2">
          <div className="w-[4rem] h-[4rem]">
            <img src={user} alt="img" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold">JOSEPH COTCHET</p>
            <span className="text-sm">joseph@lawyerdesk.in</span>
            <span className="text-xs text-yellow">Convert to public user</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] p-2 mt-2">
          <IoIosNotifications size={30}/>
          <p className="text-lg">Notifications</p>
        </div>
        <div className="flex flex-row items-center gap-6 border-t-2 h-[4rem] px-3 md:bg-yellow rounded-lg">
          <FaLock size={22}/>
          <p className="text-lg">Change Password</p>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] px-2">
          <GoLaw size={28}/>
          <p className="text-lg">Legal Preferences</p>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] px-2">
          <MdPrivacyTip size={28}/>
          <p className="text-lg">Privacy & Security</p>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] px-2">
          <BiHistory size={25}/>
          <p className="text-lg">History</p>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] px-2">
          <MdDelete size={25}/>
          <p className="text-lg text-red-600 font-semibold">Delete Account</p>
        </div>
        <div className="flex flex-row items-center gap-5 border-t-2 h-[4rem] px-2">
          <MdOutlineLogout size={25}/>
          <p className="text-lg text-red-600 font-semibold">Logout</p>
        </div>
      </div>
      {/* rightSide */}
      <div className="border col-span-4 md:block rounded-lg mt-4 shadow-lg hidden bg-white">
        <div className="flex flex-row items-center justify-center gap-5 mt-5 p-5">
          <p>Enter your current password<span className="text-red-600 text-xl">*</span> :</p>
          <input type="password" placeholder=" Enter  current password" required className="rounded-lg outline shadow-lg h-[2rem] outline-[#FFCC00] w-fit"/>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 mt-5 p-5">
          <p>Enter your New password<span className="text-red-600 text-xl">*</span> :</p>
          <input type="password" placeholder=" Enter  new password" required className="rounded-lg outline shadow-lg h-[2rem] outline-[#FFCC00] w-fit"/>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 mt-5 p-5">
          <p>Confirm your New password<span className="text-red-600 text-xl">*</span> :</p>
          <input type="password" placeholder=" confirm new password" required className="rounded-lg outline shadow-lg h-[2rem] outline-[#FFCC00] w-fit"/>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-yellow text-lg  rounded-full px-7">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
