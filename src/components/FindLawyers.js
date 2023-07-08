import React, { useState } from "react";
import search3 from "../assets/search3.svg";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import SearchLawyer from "./SearchLawyer";
import Navbar from '../components/Navbar'

function FindLawyers(props) {
  return (
    <div className="grid grid-cols-12 search">
      <div className="col-span-12">
      <Navbar />
      </div>
      <div className="col-span-3 border-2 shadow-lg mt-5 ml-9 h-fit static rounded-lg p-4" style={{height:'300px'}}>

      </div>
       <div className=" col-span-6 justify-center items-center mb-5  border-x-1  px-2 rounded-l h-[85vh] g overflow-y-scroll" style={{width:'700px',paddingLeft:"50px"}}>
        <SearchLawyer />
      </div>
      <div className=" news-feed-header col-span-3 border-2 shadow-lg mt-5 mr-9 rounded-lg h-fit p-5" style={{height:'300px'}}>
        <div
          className="left-sec "
          style={{ display: "flex"}}
        >
          <img src={search3} alt="News Icon" className="icon" style={{Color:"#0099ff"}}/>
          <span
            className="news-text"
            style={{
              fontFamily: "Urbanist",
              fontWeight: "bold",
              paddingTop: "15px",
              fontSize: "20px",
            }}
          >
            Find Lawyers
          </span>
        </div>
        <div className="w-full shadow-lg" style={{fontFamily:"Urbanist",fontWeight:"590"}}>
          <input type="text" placeholder="   Search Lawyer..." className="rounded-lg w-full h-[3rem]"/>
        </div>
        {/* <div className='right-sec'>
        <div>
          <img src={bell} alt="Bell Icon" className="icon" />
        </div>
        <div className='lawyer'>
          <Link to="/lawyer-detail">
            <img
              src={lawyer}
              alt="End User Icon"
              className="icon"
              
            />
          </Link>
        </div>
      </div> */}
      </div>
     
    </div>
  );
}

export default FindLawyers;
