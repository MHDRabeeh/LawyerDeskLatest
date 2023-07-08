import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import ET from "../assets/ET1.jpg";
import david1 from "../assets/david1.jpg";
import live from "../assets/live.jpg";
import { MdNotifications } from "react-icons/md";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* <button
        className="bg-gray-300 text-gray-800 p-2 rounded-full focus:outline-none"
        onClick={toggleDropdown}
      >
          </button> */}
      <MdNotifications size={25} onClick={toggleDropdown} />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg py-4">
          <div
            className="p-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={ET}
              alt="Image 1"
              style={{
                marginRight: "8px",
                height: "40px",
                width: "40px",
                borderRadius: "60px",
              }}
            />
            <span style={{ color: "black" }}>New update on corporate tax</span>
          </div>
          <div
            className="p-4 border-y-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={david1}
              alt="Image 2"
              style={{
                marginRight: "8px",
                height: "40px",
                width: "40px",
                borderRadius: "60px",
              }}
            />
            <span style={{ color: "black" }}>New update on corporate tax</span>
          </div>
          <div
            className="p-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={live}
              alt="Image 3"
              style={{
                marginRight: "8px",
                height: "40px",
                width: "40px",
                borderRadius: "60px",
              }}
            />
            <span style={{ color: "black" }}>New update on corporate tax</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
