import React from "react";
import BarAdmissions from "../components/BarAdmissions";
import ClientTestimonials from "../components/ClientTestimonials";
import Details from "../components/Details";
import Education from "../components/Education";
import Header from "../components/Header";
import Languages from "../components/Languages";
import NotableCases from "../components/NotableCases";
import PersonalInterests from "../components/PersonalInterests";
import ProfessionalAffiliations from "../components/ProfessionalAffiliations";
import ProfessionalEndorsements from "../components/ProfessionalEndorsements";
import Publications from "../components/Publications";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { GrEdit } from "react-icons/gr";
import { specialization } from "../data";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Profile = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <Header /> */}
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-2 shadow-lg mt-5 ml-9 h-fit static rounded-lg p-4">
          <ProfileCard />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto my-0 col-span-6 px-3 h-[85vh] mt-5 rounded-lg shadow-lg border-2 overflow-y-scroll ">
          {/* <Details /> */}
          <BarAdmissions />
          <Languages />
          <Education />
          <ProfessionalEndorsements />
          <NotableCases />
          <ClientTestimonials />
          <ProfessionalAffiliations />
          <Publications />
          <PersonalInterests />
        </div>
        <div className="col-span-3 border-2 shadow-lg mt-5 mr-9 rounded-lg h-fit p-5">
          <div className="  bg-white  rounded-md py-6 px-4 relative">
            <span
              className="p-1 bg-[#0099ff] rounded-full ml-[10px] absolute top-[-10px] right-5"
              style={{ backgroundColor: "#0099ff" }}
            >
              <GrEdit />
            </span>
            <div className="flex items-start justify-between mb-4">
              <div className="w-[45%]">
                <h3 className="text-[0.8rem]  text-black mb-2 font-semibold" style={{fontFamily:"Urbanist",fontWeight:"bold"}}>
                  Specialized in:
                </h3>
                <div className="flex flex-wrap">
                  {specialization.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" py-1 px-2 text-[0.7rem]  text-black flex items-center mb-1  rounded mr-[5px] "
                        style={{ backgroundColor: "#0099ff" }}
                      >
                        <span className="mr-[5px]">{item.icon}</span>
                        <span className="capitalize font-medium" style={{fontFamily:"Urbanist",fontWeight:"590",color:"white"}}>
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[47%] ">
                <p className="flex items-center text-[0.7rem]  text-black mb-1 " style={{fontFamily:"Urbanist",fontWeight:"600"}}>
                  <span className="mr-[5px] ">
                    <MdLocationPin />
                  </span>{" "}
                  California,United States
                </p>
                <p className="flex items-center text-[0.7rem]  text-black mb-1 " style={{fontFamily:"Urbanist",fontWeight:"600"}}>
                  <span className="mr-[5px] ">
                    <BsFillTelephoneFill />
                  </span>{" "}
                  +91 8921912219
                </p>
                <p className="flex items-center text-[0.7rem]  text-black mb-1" style={{fontFamily:"Urbanist",fontWeight:"600"}}>
                  <span className="mr-[5px] ">
                    <HiMail />
                  </span>{" "}
                  joseph@lawyerdesk.in
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-text-secondary text-[0.8rem] "
                style={{
                  fontWeight: "600",
                  fontFamily: "Urbanist",
                  fontStyle: "italic",
                }}
              >
                Joseph Cotchett is one of the most respected lawyers in the
                modern American legal landscape,but he maintains a humble
                approach to law that places the issues well above paychecks.
                Cotchett defends anyone he feels needs defence, regardless of
                their background
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
