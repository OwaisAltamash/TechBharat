import React from 'react'

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <h1>What Our Students says</h1>

        <div className="row">
            <div className="testimonial-col">
                <img src="AttImgs/student2.jpg" alt="" />
                <div>
                    <p>Robotics can be challenging, but that's what makes it interesting. It pushes me to think critically and problem-solve</p>
                    <h3>Akash</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>

                </div>
            </div>

            <div className="testimonial-col">
                <img src="AttImgs/student.webp" alt="" />
                <div>
                    <p>I think robotics is a field with a lot of potential. It opens up exciting career possibilities in technology and engineering</p>
                    <h3>Pratibha</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;