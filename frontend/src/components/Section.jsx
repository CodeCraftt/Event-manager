import React from 'react'
import { Link } from "react-scroll";


const Section = () => {
  return (
    <section className='hero'>
      <img src="/res.jpg" />
      <div className="item">
        <h3>Welcome</h3>
        <div>
          <h1>Your dreams come true with us.</h1>
          
        <p>Every small wish holds immense significance for someone.</p>
        
        <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default Section