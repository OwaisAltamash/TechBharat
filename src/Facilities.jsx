import React from 'react'

const Facilities = () => {
  return (
    <>
        <section className='facilities'>
            <h1>Our Facilities</h1> 
            <p>Empower Students with Cutting-edge Robotics Education</p>

            <div className="row">
                <div className="facilities-col">
                    <img src="AttImgs/s.jpg" alt="" />
                    <h3>Interactive Workstations</h3>
                    <p>Individual workstations with robotics kits, computers, and tools to facilitate practical learning experiences</p>
                </div>

                <div className="facilities-col">
                    <img src="AttImgs/office4.jpg" alt="" />
                    <h3>Career Counseling Center</h3>
                    <p>Offering resources and guidance to help students explore and pursue careers in robotics and related fields</p>
                </div>

                <div className="facilities-col">
                    <img src="AttImgs/office3.jpg" alt="" />
                    <h3>Access to Robotics Experts</h3>
                    <p>Availability of experienced mentors and professionals to guide and support individuals in their robotics endeavors</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Facilities;