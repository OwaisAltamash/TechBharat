import React from 'react'

const Services = () => {
  return (
    <>
        <section className='services'>

            <h1>OUR SERVICES</h1>
            <p>We offer training programs to empower students with the necessary skills and knowledge. Encouraging students to collaborate on robotics projects, fostering teamwork, communication skills, and the application of theoretical knowledge to real-world scenarios. Join us today!.</p>
            
            <div className="row">
                <div className="serv-col">
                  <img src="AttImgs/robo2.svg" />
                  <div className="layer">
                    <h3>Mentorship Programs</h3>
                    <p>Connecting students with experienced mentors in the field of robotics.</p>
                  </div>
                </div>

                <div className="serv-col">
                  <img src="AttImgs/robo4.svg" />
                  <div className="layer">
                    <h3>Summer Camps and Bootcamps </h3>
                    <p>Immersive and hands-on summer camps or bootcamps designed to deepen students</p>
                  </div>
                </div>

                <div className="serv-col">
                  <img src="AttImgs/robo3.png" />
                  <div className="layer">
                    <h3>Collaborative Projects</h3>
                    <p>Encouraging students to collaborate on robotics projects</p>
                  </div>
                </div>
            </div> 
 
        </section>
    </>
  )
}

export default Services;