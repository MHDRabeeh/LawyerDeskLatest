import React, { useState } from "react";
import "./SearchLawyer.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import msg from "../assets/msg.svg";
import kk from "../assets/kk.svg";
import star3 from "../assets/star3.svg";
import fali from "../assets/fali.svg";
import salve from "../assets/salve.svg";

const PostList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample list of posts
  const posts = [
    {
      id: 1,
      title: "Post 1",
      star: star3,
      content:
        "Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.",
      lawyer: fali,
      icon: <HiLocationMarker style={{ fontSize: "15px" }} />,
      news: msg,
      rate1: "Top Rated “4.9” ",
      exp: "Experience “20 yr+” ",
      lan: "Speaks “Telugu” ",
      lawyerName: "Harish Salve",
      location: "New Delhi, India",
    },
    {
      id: 2,
      title: "Post 1",
      star: star3,
      content:
        "Kottayan Katankot Venugopal is an Indian constitutional lawyer and a senior advocate in the Supreme Court of India. On 1 July 2017, he was appointed as the Attorney General of India and retired on 30 September, 2022. He is Patron of SAARCLAW and earlier has been its President.[4] He is founder of M K Nambyar SAARCLAW Centre For Advanced Legal Studies at the NALSAR Law University.",
      lawyer: kk,
      icon: <HiLocationMarker style={{ fontSize: "15px" }} />,
      news: msg,
      rate1: "Top Rated “4.9” ",
      exp: "Experience “25 yr+” ",
      lan: "Speaks “Malayalam” ",
      lawyerName: "K. K. Venugopal",
      location: "Kerala, India",
    },
    {
      id: 3,
      title: "Post 1",
      star: star3,
      content:
        "Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.",
      lawyer: fali,
      icon: <HiLocationMarker style={{ fontSize: "15px" }} />,
      news: msg,
      rate1: "Top Rated “4.9” ",
      exp: "Experience “20 yr+” ",
      lan: "Speaks “English” ",
      lawyerName: "Fali Sam Nariman",
      location: "Burma",
    },
    {
      id: 4,
      title: "Post 1",
      star: star3,
      content:
        "Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.",
      lawyer: salve,
      icon: <HiLocationMarker style={{ fontSize: "15px" }} />,
      news: msg,
      rate1: "Top Rated “4.9” ",
      exp: "Experience “20 yr+” ",
      lan: "Speaks “Telugu” ",
      lawyerName: "Harish Salve",
      location: "New Delhi, India",
    },
    {
      id: 5,
      title: "Post 1",
      content:
        "Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice.",
      lawyer: msg,
      rate1: "Top Rated “4.9” ",
      exp: "Experience “20 yr+” ",
      lan: "Speaks “Telugu” ",
      lawyerName: "Harish Salve",
      location: "New Delhi, India",
    },

    // Additional posts...
  ];

  useState(() => {
    setFilteredPosts(posts.slice(0, 3));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the posts based on the search query
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredPosts(filtered.slice(0, 3));
  };

  return (
    <div className="search1 ">
      {/* <input
        type="text"
        placeholder="Search lawyers"
        value={searchQuery}
        onChange={handleSearch}
      /> */}

      <ul>
        {filteredPosts.length > 0
          ? filteredPosts.map((post) => (
              <li key={post.id}>
                <div className="post1">
                  <div className="right-sec">
                    <div className="imgsec">
                      {
                        <img
                          src={post.lawyer}
                          alt={post.username}
                          style={{
                            height: "80px",
                            width: "80px",
                            marginLeft: "50px",
                          }}
                        />
                      }
                    </div>
                    <div className="flex flex-col p-5 rate-sec">
                      <p className="" style={{ fontFamily: "Urbanist", fontWeight: "520" }}>
                        {post.rate1}
                      </p>
                      <p style={{ fontFamily: "Urbanist", fontWeight: "520" }}>
                        {post.exp}
                      </p>
                      <p style={{ fontFamily: "Urbanist", fontWeight: "520" }}>
                        {post.lan}
                      </p>
                    </div>
                  </div>
                  <div className="left-sec">
                    {
                      <img
                        src={post.news}
                        alt={post.username}
                        style={{ float: "right", height: "80px",Color:"#0099FF"}}
                      />
                    }
                    <div className="lawyername">
                      <div
                        className="name"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <p
                          style={{
                            fontFamily: "Urbanist",
                            fontWeight: "bold",
                            fontSize: "17px",
                          }}
                        >
                          {post.lawyerName}
                        </p>
                        <img
                          src={post.star}
                          alt={post.username}
                          style={{
                            height: "70px",
                            width: "80px",
                            marginLeft: "10px",
                            marginTop: "5px",
                            Color:"#546bf1",
                          }}
                        />
                      </div>
                      <div className="location">
                        {" "}
                        <p
                          style={{
                            fontSize: "11px",
                            paddingTop: "0px",
                            fontWeight: "500",
                            display: "flex",
                            wordSpacing: "2px",
                            fontFamily:"Urbanist"
                          }}
                        >
                          {post.icon}
                          {post.location}
                        </p>
                      </div>
                    </div>
                    <div className="content mt-2" style={{ height: "55px" }}>
                      {" "}
                      <p style={{ fontSize: "15px", fontStyle: "italic",fontFamily:"Urbanist" }}>
                        'Harish Salve KC is an Indian senior advocate who
                        practices at the Supreme Court of India. He served as
                        the Solicitor General of India from 1 November 1999 to 3
                        November 2002. He also fought the case of Kulbhushan
                        Jadhav at the International Court of Justice.'
                      </p>
                    </div>
                    <div className="specialztn flex flex-col mt-[5rem]">
                      <div className="special-hed">
                        <p
                          style={{
                            fontFamily: "Urbanist",
                            fontWeight: "530",
                            paddingBottom: "10px",
                          }}
                        >
                          Specialized In:
                        </p>
                      </div>
                      <div className="links">
                        <a href="">
                          <span>
                            <img src="" />
                          </span>{" "}
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Urbanist",
                              fontWeight: "550",
                              backgroundColor:"#0099FF",
                              color:"white",
                            }}
                          >
                            Family Law
                          </span>
                        </a>
                        <a href="">
                          <span>
                            <img src="" />
                          </span>{" "}
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Urbanist",
                              fontWeight: "550",
                              backgroundColor:"#0099FF",
                              color:"white",
                            }}
                          >
                            Corporate Law
                          </span>
                        </a>
                        <a href="">
                          <span>
                            <img src="" />
                          </span>{" "}
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Urbanist",
                              fontWeight: "550",
                              backgroundColor:"#0099FF",
                              color:"white",
                            }}
                          >
                            Property Law
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          : posts.slice(0, 3).map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default PostList;
