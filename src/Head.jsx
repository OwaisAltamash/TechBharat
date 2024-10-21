import React from 'react';
import Wasted from './Wasted';
import Services from './Services';
import Contact from './Contact';
import Facilities from './Facilities';
import Testimonials from './Testimonials';


const Head = () => {
  return (
    <>
    <div className="text-box">
        <h1>Navigate the Future with Robotic Precision</h1>
        <p> Redefining Robotics, Reshaping the Future </p>
        <button className='secBtn'>Visit Us To Know More</button>
    </div> 

    <Wasted/>
    <Services/>
    <Facilities/>
    <Testimonials/>
    <Contact/>
</>
  )
};

export default Head;