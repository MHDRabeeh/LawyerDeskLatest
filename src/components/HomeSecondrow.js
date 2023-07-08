import React, { useState } from "react";
import Masonry from "react-masonry-css";

const HomeSecondrow = ({ SrowData }) => {
  const [selectedButton, setSelectedButton] = useState("Legal Updates");

  const handleButtonClick = (word) => {
    setSelectedButton(word);
  };

  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  const masonryStyle = {
    display: "flex",
    marginLeft: "-15px",
    width: "auto",
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      style={masonryStyle}
    >
      {SrowData.map((item) => (
        <div
          key={item}
          className={`masonry-item rounded-full ${
            selectedButton === item ? "bg-[#0099FF]" : "bg-gray-400"
          } flex items-center justify-center cursor-pointer shadow-md`}
          onClick={() => handleButtonClick(item)}
          style={{
            height: "30px",
            width: "100%",
            marginBottom: "10px",
            padding: "0 15px",
            color:"white"
          }}
        >
          <div
            className="flex justify-center items-center text-sm"
            style={{
              fontFamily: "Urbanist",
              fontWeight: "600",
              fontSize: "11px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default HomeSecondrow;
