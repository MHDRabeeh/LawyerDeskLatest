import React,{useState} from 'react'
import propic from '../assets/K chandru 1.png'
import {MdLocationOn} from 'react-icons/md'
import {BiTrendingUp} from 'react-icons/bi'

const CaseComponent = () => {

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
      };
    
      const text = "On May 29, 2023, at approximately 1:00 PM, I was walking onthe footpath of a street in India when I was hit by a motorcycle. The motorcycle was traveling at a high speed anddid not stop after hitting me. I was thrown to the ground andsuffered minor injuries, including a sprained ankle and abruised knee. I was able to get up and walk to the side of the road, where Icalled for help. The police arrived and took a report of theaccident. They were unable to locate the motorcycle or thedriver.I am providing this detailed description of the accident to mylawyer in order to assist him in filing a claim against the driverof the motorcycle. I believe that the driver was negligent inoperating his vehicle and that his negligence caused myinjuries. I am seeking compensation for my medical expenses,lost wages, and pain and suffering.I have attached a copy of the police report to this letter. Iwould be happy to provide any additional information that mylawyer may need"
      const displayText = showFullText ? text : text.slice(0, 500) + '...';
  return (
    <div className='bg-[#89c7f0] rounded-lg p-3 md:p-5 mt-4 w-full  flex flex-col gap-3' style={{borderRadius:"20px"}}> 
        <div className='flex flex-row gap-3 items-center'>
            <div><img src={propic} alt="" className='w-[3rem]' /></div>
            <div className='flex flex-col'>
                <p className='font-semibold' style={{fontFamily: "Urbanist",fontWeight:"bold",fontSize:"18px"}}>Case of hit & run</p>
                <p className='font-light' style={{fontFamily: "Urbanist",fontWeight:"600"}}>By : Susan</p>
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit p-1 text-sm  font-semibold'><p style={{fontFamily: "Urbanist",fontWeight:"580",color:'white'}}>Attempt to murder</p></div>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit p-1 text-sm  font-semibold'><p style={{fontFamily: "Urbanist",fontWeight:"580",color:'white'}}>Traffic Law</p></div>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit p-1 text-sm  font-semibold'><p style={{fontFamily: "Urbanist",fontWeight:"580",color:'white'}}>Criminal Law</p></div>
        </div>

        <div className=''>
        <p className="text-sm" style={{fontFamily:"Urbanist",fontWeight:"530"}}>
        {displayText}
      </p>
      {showFullText ? (
        <button
          className="text-blue-600 mt-2"
          onClick={toggleText} style={{fontFamily:'Urbanist'}}
        >
          ...Show Less
        </button>
      ) : (
        <button
          className="text-blue-600 mt-1"
          onClick={toggleText} style={{fontFamily:'Urbanist'}}
        >
          ...Read More
        </button>
      )}
        </div>
        <div className='flex flex-col '>
            <p className='text-blue-700 font-semibold' style={{fontFamily:"Urbanist",fontWeight:"500",fontSize:"15px"}}>8 more applicants</p>
            <div className='flex flex-row items-center gap-2 font-medium'><MdLocationOn/> <p style={{fontFamily:"Urbanist",fontWeight:"500",fontSize:"15px"}}>Visakhapatnam</p></div>
            <div className='flex flex-row items-center gap-2 font-medium'><BiTrendingUp/> <p style={{fontFamily:"Urbanist",fontWeight:"500",fontSize:"15px"}}>80% Match to your specilization</p></div>
        </div>
    </div>
  )
}

export default CaseComponent