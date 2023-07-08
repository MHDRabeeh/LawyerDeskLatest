import React,{useState} from 'react'
import profileIcon from '../assets/K chandru 1.png'
import courtImg from '../assets/courtimage.jpeg'
import postimg from '../assets/It_rules 1.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BsSend} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'

const Post = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
      };
    
      const text = "The Union Government, on April 6, 2023, promulgated certain amendments to the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, a piece of delegated legislation under the Information Technology Act, 2000. Through these amendments, inter alia, social media intermediaries or SMI (such as Twitter, Facebook, etc.) are now obligated under Rule 3(1)(b)(v) of the IT Rules to inform their users, through internal rules, regulations and other policies, to not 'host, display, upload, modify, publish, transmit, store, update or share any information' which is 'identified as fake or false or misleading by [a] fact check unit of the Central Government' in respect of 'any business of the Union government. In a situation where SMIs fail to carry out this obligation, they will be exposed to potentially losing their immunity from any civil or criminal liability as intermediaries for any third-party content hosted on their platforms'.";

      const displayText = showFullText ? text : text.slice(0, 150) + '...';

  return (
    <div className='bg-[#ffff] rounded-lg p-3 md:p-5 mt-4 w-full flex flex-col gap-3' style={{borderRadius:"20px"}}>
        {/* head name section */}
        <div className='flex flex-row gap-3 items-center '>
            <div><img src={profileIcon} alt="propic" className='w-[3rem]'/></div>
            <div className='flex flex-col'>
                <p className='font-semibold' style={{fontFamily:"Urbanist",fontWeight:'bold'}}>Sharmeen Hakim</p>
                <p className='font-light text-gray-400' style={{fontFamily:"Urbanist",fontWeight:'600'}}>April 12 2023</p>
            </div>
        </div>
        {/* tags */}
        <div className='flex gap-2'>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit py-1 px-3 font-semibold'><p style={{fontFamily:"Urbanist",fontWeight:"580",color:'white'}}>It Act</p></div>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit py-1 px-3 font-semibold'><p style={{fontFamily:"Urbanist",fontWeight:"580",color:'white'}}>Digital Media</p></div>
            <div className='rounded-full bg-[#0099ff] w-fit flex justify-center items-center w-fit py-1 px-3 font-semibold'><p style={{fontFamily:"Urbanist",fontWeight:"580",color:'white'}}>Social Media</p></div>
        </div>
        {/* content */}
        <div className=''>
        <p className="text-sm" style={{fontFamily:'Urbanist'}}>
        {displayText}
      </p>
      {showFullText ? (
        <button
          className="text-blue-600 mt-2"
          onClick={toggleText} style={{textDecorationColor:"blue",fontFamily:"Urbanist"}}
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
        {/* image section */}
        <div className=''><img className='w-full md:w-3/12' src={postimg} alt="img" /></div>
        {/* buttons */}
        <div className='flex flex-row justify-between px-5 items-center'>
             <div className='flex flex-col items-center gap-2 '>
            <AiOutlineHeart size={25}/>
            <p className='text-gray-500' style={{fontFamily:"Urbanist",fontWeight:"600"}}>Like</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
             <FaRegComment size={24}/>
             <p className='text-gray-500' style={{fontFamily:"Urbanist",fontWeight:"600"}}>Comment</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
             <BsSend size={24}/>
             <p className='text-gray-500' style={{fontFamily:"Urbanist",fontWeight:"600"}}>Share</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
             <BsBookmark size={24}/>
             <p className='text-gray-500' style={{fontFamily:"Urbanist",fontWeight:"600"}}>Save</p>
            </div>
        </div>
    </div>
  )
}

export default Post