import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const InputResult = () => {
  const [showResult, setShowResult] = useState(true);

  const handleView = () => {
    setShowResult(!showResult);
  };
  return (
    <div className="mt-5 p-3 rounded-lg  min-h-48 max-h-[79vh] overflow-y-scroll  outline outline-offset-0 outline-[#0099FF] shadow-lg bg-#f1f5f9" >
      <div className="flex justify-between items-center rounded-lg bg-white mb-1 p-1" >
        <p className="font-semibold" style={{fontFamily:"urbanist"}}>Right to Information Act, 2005</p>
        <div
          className="bg-[#0099FF] text-white rounded-full w-fit drop-shadow-lg flex items-center cursor-pointer"
          onClick={handleView}
        >
          {showResult?<IoIosArrowUp size={20}/>:<IoIosArrowDown size={20} />}
        </div>
      </div>
      {showResult ? (
        < >
          <div className="bg-white p-3 rounded-lg ">
          <div className="rounded-full bg-[#0099FF] w-fit flex items-center px-3 mt-2 shadow-lg cursor-pointer" >
            <p className="text-sm text-white" style={{fontFamily:"urbanist"}}>View Document</p>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold" style={{fontFamily:"urbanist"}}>Summary</h2>
            <p style={{fontFamily:"urbanist"}}>
              The Right to Information Act, 2005 (RTI Act) is an Indian law that
              grants citizens the right to access information held by public
              authorities. It aims to promote transparency, accountability, and
              reduce corruption by empowering individuals to request and receive
              information on various aspects of government functioning.
            </p>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold " style={{fontFamily:"urbanist"}}>Key Points</h2>
            <div className="px-4 mt-1">
              <ul className="list-outside	list-disc" style={{fontFamily:"urbanist"}}>
                <li style={{fontFamily:"urbanist"}}>
                  The RTI Act empowers Indian citizens to seek information from
                  public authorities, promoting transparency and accountability.
                </li>
                <li style={{fontFamily:"urbanist"}}>
                  The Act mandates a timely response (within 30 days) to
                  information requests, with a possibility of extension in
                  certain cases.
                </li>
                <li style={{fontFamily:"urbanist"}}>
                  Information can be denied if it falls under specific
                  exemptions, such as national security, trade secrets, or
                  personal privacy.
                </li>
                <li style={{fontFamily:"urbanist"}}>
                  The Act establishes a Central Information Commission and State
                  Information Commissions to address complaints and appeals
                  related to RTI requests
                </li>
                Failure to provide information within the specified time frame
                or providing false information can result in penalties of the
                responsible public officials.
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold " style={{fontFamily:"urbanist"}}>Related Laws</h2>
            <div className="px-4 mt-1">
            <ul className="list-outside	list-disc">
              <li>
                <span className="font-semibold" style={{fontFamily:"urbanist"}}>The Indian Penal Code, 1860</span>: Contains provisions for punishment
                of public servants for corruption or abuse of power.
              </li>
              <li>
                <span className="font-semibold" style={{fontFamily:"urbanist"}}>The Prevention of Corruption Act, 1988</span>: Aims to combat corruption
                in government agencies and public sector organizations.
              </li>
              <li>
                <span className="font-semibold" style={{fontFamily:"urbanist"}}>The Whistleblowers Protection Act, 2011</span>: Provides protection to
                individuals who report corruption, wrongdoing, or misuse of
                power within public authorities.
              </li>
            </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold " style={{fontFamily:"urbanist"}}>Year and Link</h2>
            <p style={{fontFamily:"urbanist"}}>
              The Right to Information Act, 2005 was enacted on 15th June 2005.
            </p>
          </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputResult;
