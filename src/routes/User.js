import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import PhNumber from "../pages/PhNumber";
import OtpVerify from "../pages/OtpVerify";
import Home from "../pages/Home";
import SignUpSubmit from "../pages/SignUp-submit";
import Chats from "../pages/Chats";
import FindLawyers from "../components/FindLawyers";
import LawsNrules from "../pages/LawsNrules";
import Settings from "../pages/Settings";
import Dictionary from "../pages/Dictionary";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signingPhase" element={<PhNumber />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/userdetailsubmit" element={<SignUpSubmit/>}/>
        <Route path="/Chats" element={<Chats/>}/>
        <Route path="/findlawyers" element={<FindLawyers/>}/>
        <Route path="/lawsRules" element={<LawsNrules/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  );
};

export default User;
