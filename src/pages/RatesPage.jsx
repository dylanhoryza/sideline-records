import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import '../styles/ratespage.css'

export default function RatesPage() {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleCardClick = (index) => {
    setFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Define separate springs for each card
  const flipAnimations = flipped.map((isFlipped) =>
    useSpring({
      opacity: isFlipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${isFlipped ? 360 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    })
  );

  return ( 
    <section>
      <div className='rates-title'>
          <h1 className='rates-header'>OUR <span>RATES</span></h1>
        </div>
      <div className="container">
      
      <div className='row'>
      {[0].map((index) => (
        <div
          key={index}
          className="c"
          onClick={() => handleCardClick(index)}
        >
          <animated.div
            className="back recording-back"
            style={{
              opacity: flipAnimations[index].opacity.to((o) => 1 - o),
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title'>Recording with Engineer</span>
          </animated.div>
          <animated.div
            className="front"
            style={{
              opacity: flipAnimations[index].opacity,
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title-2'>Rates</span>
            <ul className='rates-list'>
              <li>Full Day 8 Hours <span>$500</span> </li>
              <li>Half Day 4 Hours <span>$275</span> </li>
              <li>Each Additional Hour <span>$75</span></li>
            </ul>
          </animated.div>
          
          
        </div>
      ))}
        {[2].map((index) => (
        <div
          key={index}
          className="c"
          onClick={() => handleCardClick(index)}
        >
          <animated.div
            className="back-mixing back"
            style={{
              opacity: flipAnimations[index].opacity.to((o) => 1 - o),
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title'>Mixing & Mastering</span>
          </animated.div>
          <animated.div
            className="front"
            style={{
              opacity: flipAnimations[index].opacity,
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title-2'>Rates</span>
            <ul className='rates-list'>
              <li>In Person <span>$75/hr</span> </li>
              <li>Remote <span>$175/song</span> </li>
              <li>Complementary Revisions <span>2 Free</span></li>
              <li>Each Set of Revisions After <span>$75/set</span> </li>
            </ul>
          </animated.div>
          
          
        </div>
      ))}
         {[3].map((index) => (
        <div
          key={index}
          className="c"
          onClick={() => handleCardClick(index)}
        >
          <animated.div
            className="back space-back"
            style={{
              opacity: flipAnimations[index].opacity.to((o) => 1 - o),
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title'>Space Rentals</span>
          </animated.div>
          <animated.div
            className="front"
            style={{
              opacity: flipAnimations[index].opacity,
              transform: flipAnimations[index].transform,
            }}
          >
            <span className='card-title-2'>Rates</span>
            <ul className='rates-list'>
              <li>Full Day 8-10 Hours <span>$500-$650</span> </li>
              <li>Half Day 4-6 Hours <span>$275-$400</span> </li>
              <li>Events: Limited to <span>30 people</span> </li>
              <li>Can be used for <span>office space/meetings</span> </li>
            </ul>
          </animated.div>
          
          
        </div>
      ))}
      </div>
      
    </div>
    <div className='book-session'>
      <h2>To book a session and check availability, please click the button below.</h2>
     
    </div>
    <div className='book-now-btn'>
            <button className='book-btn'  onClick={() => window.open("https://engineears.com/studio/slrmusic", "_blank")}>Book Now</button>
      </div>
    </section>
    
  );
}

