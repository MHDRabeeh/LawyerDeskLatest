import React from "react";
import { barAdmissions } from "../data";
import { GrEdit } from "react-icons/gr";

const BarAdmissions = () => {
  return (
    <div className="mt-[1rem] mb-[3rem]">
      <h2 className="flex items-center mb-[1.2rem]">
        <span
          className="text-heading-h2 text:xs sm:text-base font-semibold md:text-xl"
          style={{ fontFamily: "Urbanist", fontWeight: "bold" }}
        >
          Bar Admissions (Jurisdictions)
        </span>
        <span className="p-1 bg-[#0099ff] rounded-full ml-[10px]">
          <GrEdit />
        </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {barAdmissions.map((item) => {
          return (
            <div
              key={item.id}
              className="text-center bg-[#0099ff] py-2 px-2 rounded text-black text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] font-semibold capitalize"
              style={{ fontFamily: "Urbanist", backgroundColor: "#0099ff",fontSize:"14px",color:'white',fontWeight:"590" }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarAdmissions;
