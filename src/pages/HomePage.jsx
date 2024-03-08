import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/homepage.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedSectionTitle = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.7, // When 50% of the element is in view
  });

  // Define the spring animation properties
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <animated.h2 ref={ref} className='section-title' style={animation}>
      {children}
    </animated.h2>
  );
};

export default function HomePage() {
  return (
    <div className="home-container">
       <div className='home-about-section'>
            <div className='image-container'>
            {/* <img src='' alt="solo-logo" className='solo-logo-2'/> */}
            </div>
            <h3 className='company-about'>POST AUDIO PRODUCTION & RECORDING STUDIO</h3>
            <div className='contact-button-container'>
              <Link to="/contact">
              <button className='home-contact'>Contact</button>
              </Link>
            </div>
            
            
            <div className='icon-scroll'></div>
          </div>
          <div className='home-services'>
        <div className='title-container'>
        <AnimatedSectionTitle>OUR <span>SERVICES</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Music videos in various genres shot, directed and edited by Solo Visuals.</p> */}
          <Link to="/videos/music">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-pricing'>
        <div className='title-container-right'>
        <AnimatedSectionTitle>PRICING & <span>AVAILABILITY</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Concerts, corporate events, grand openings and more!</p> */}
          <Link to="/videos/events">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-portfolio'>
        <div className='title-container'>
        <AnimatedSectionTitle>OUR <span>WORK</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Description goes here</p> */}
          <Link to="/videos/lifestyle">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
    </div>
  )
}