import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { GrEdit } from 'react-icons/gr';
import jenny22 from '../assets/jenny22.jpg';
import joe2 from '../assets/joe2.jpg';
import david1 from '../assets/david1.jpg';

import './ClientTestimonials.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';


const { Meta } = Card;
const ClientTestimonials = () => {
  return (
    <div className='mt-[1rem] mb-[3rem]'>
    <h2 className='flex items-center mb-[1.2rem]'>
        <span className='text-heading-h2 text:xs sm:text-base font-semibold md:text-xl' style={{fontWeight:"bold",fontFamily:"Urbanist"}}>Client Testimonials</span>
        <span className='p-1 rounded-full ml-[10px]' style={{backgroundColor:"#0099ff"}}><GrEdit /></span>
    </h2>
    <div style={{display:"flex"}} className='overflow-x-scroll gap-5'>
    <Card style={{backgroundColor:"white",borderRadius:"20px",width:"900px",height:"100%"}}>
      <Card.Body>
        <Row>
          <Col className='flex flex-col items-center p-5 justify-center'>
            <Image src={jenny22} rounded className="custom-image" style={{borderRadius:"70px"}}/>
            <Card.Title style={{textAlign:"center",paddingTop:"3px",fontFamily:"Urbanist",fontWeight:"bold"}}>Georgina</Card.Title>
            <Card.Text style={{fontSize:"11px",textAlign:"center",textDecorationColor:"#000000",fontStyle:"italic",font:"Urbanist",fontWeight:"700"}}>
            "Great experience overall having Matt Cadwell <br></br>as my attorney. Matt understands his client, <br></br>very insightful and is an expert in his field. <br></br>Truly a professional and marvelous individual."
        </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card style={{backgroundColor:"white",borderRadius:"20px",width:"900px",height:"100%"}}>
      <Card.Body>
        <Row>
          <Col xs={6} md={4} className='flex flex-col items-center p-5 justify-center'>
            <Image src={joe2} rounded className="custom-image"  style={{borderRadius:"70px"}}/>
            <Card.Title style={{textAlign:"center",paddingTop:"3px",fontFamily:"Urbanist",fontWeight:"bold"}}>Jenny S</Card.Title>
            <Card.Text style={{fontSize:"11px",textAlign:"center",textDecorationColor:"#000000",fontStyle:"italic",font:"Urbanist",fontWeight:"700"}}>
            "Joseph Cotchett helped me finish a long time case<br></br> I’ve been trying to wrap up for years. He was completely<br></br> understanding, professional and worked very diligently<br></br> to the end and I’m so grateful! Highly recommend!!"
        </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card style={{backgroundColor:"white",borderRadius:"20px",width:"900px",height:"100%"}}>
      <Card.Body>
        <Row>
          <Col xs={6} md={4} className='flex flex-col items-center p-5 justify-center'>
            <Image src={david1} rounded className="custom-image" style={{borderRadius:"70px"}}/>
            <Card.Title style={{textAlign:"center",paddingTop:"3px",fontFamily:"Urbanist",fontWeight:"bold"}}>Marchell</Card.Title>
            <Card.Text style={{fontSize:"11px",textAlign:"center",textDecorationColor:"#000000",fontStyle:"italic",font:"Urbanist",fontWeight:"700"}}>
            "Joseph Cotchett helped me finish a long time case<br></br> I’ve been trying to wrap up for years. He was completely<br></br> understanding, professional and worked very diligently<br></br> to the end and I’m so grateful! Highly recommend!!"
        </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </div>
        </div>
    
  )
}

export default ClientTestimonials
