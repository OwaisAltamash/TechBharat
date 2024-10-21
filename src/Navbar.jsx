import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "./img/logo.png";

const Navbar = () => {
  return (
    <>
        <section className='Header'>
                <nav className='navBar'>
                    <div className="logo">
                    <img src={img1} alt="" />
                    </div>
                    <div className="nav-links" id='navLinkss'>
                        <ul>
                            <Link to="/"><li id='First'>HOME</li></Link>
                            <Link to='/'><li>ABOUT</li></Link>
                            <Link to='/#'><li>LOGIN</li></Link>
                            <Link to='/#'><li>SIGN UP</li></Link>
                        </ul>
                    </div>
                </nav>

              
        </section>
    </>
  )
}

export default Navbar;
