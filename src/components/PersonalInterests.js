import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { GrEdit } from 'react-icons/gr';
import { personalInterests } from '../data'

function PersonalInterests() {
  return (
    <div className='mt-[1rem] mb-[3rem]'>
    <h2 className='flex items-center mb-[1.2rem]'>
        <span className='text-heading-h2 text:xs sm:text-base font-semibold md:text-xl' style={{fontWeight:"bold",fontFamily:"Open Sans"}}>Personal Interests</span>
        <span className='p-1 bg-yellow rounded-full ml-[10px]' style={{backgroundColor:"#0099ff"}}><GrEdit /></span>
    </h2>
    <div className='flex flex-wrap'>
                        {
                            personalInterests.map((item) => {
                                return <div key={item.id} className='py-1 px-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] text-black flex items-center mb-1 sm:mb-2 rounded-full mr-[5px] sm:mr-[10px]' style={{justifyContent:'center',width: '100px', height: '40px',backgroundColor:"#0099ff",color:"white"}}>
                                    <span className='capitalize' style={{fontWeight:"590",fontFamily:"Urbanist"}}>{item.title}</span>
                                </div>
                            })
                        }
                    </div>
                </div>

  )
}

export default PersonalInterests
