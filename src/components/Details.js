import React from "react";
import { specialization } from "../data";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { GrEdit } from "react-icons/gr";

const Details = () => {
  return (
    <div className="mt-[1rem] mb-[3rem] bg-white md:rounded-lg rounded-md py-6 px-4 relative">
      <span
        className="p-1 bg-yellow rounded-full ml-[10px] absolute top-[-10px] right-5"
        style={{ backgroundColor: "#ffcc00" }}
      >
        <GrEdit />
      </span>
      <div className="flex items-start justify-between mb-4">
        <div className="w-[45%]">
          <h3 className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] text-black mb-2 font-semibold">
            Specialized in:
          </h3>
          <div className="flex flex-wrap">
            {specialization.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" py-1 px-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] text-black flex items-center mb-1 sm:mb-2 rounded mr-[5px] sm:mr-[10px]"
                  style={{ backgroundColor: "#ffcc00" }}
                >
                  <span className="mr-[5px]">{item.icon}</span>
                  <span className="capitalize font-medium">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[47%] md:w-[35%]">
          <p className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] text-black mb-1 md:mb-2">
            <span className="mr-[5px] sm:mr-[10px]">
              <MdLocationPin />
            </span>{" "}
            California, United States
          </p>
          <p className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] text-black mb-1 md:mb-2">
            <span className="mr-[5px] sm:mr-[10px]">
              <BsFillTelephoneFill />
            </span>{" "}
            +91 8921912219
          </p>
          <p
            className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] text-black mb-1
                    md:mb-2"
          >
            <span className="mr-[5px] sm:mr-[10px]">
              <HiMail />
            </span>{" "}
            joseph@lawyerdesk.in
          </p>
        </div>
      </div>
      <div>
        <p
          className="text-text-secondary text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]"
          style={{
            fontWeight: "600",
            fontFamily: "Open Sans",
            fontStyle: "italic",
          }}
        >
          Joseph Cotchett is one of the most respected lawyers in the modern
          American legal landscape,but he maintains a humble approach to law
          that places the issues well above paychecks. Cotchett defends anyone
          he feels needs defence, regardless of their background
        </p>
      </div>
    </div>
  );
};

export default Details;
