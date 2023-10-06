import React from 'react';
import './herosection.css';
import Pc from '../../assets/fotor-ai-20231006123821.jpg';
import Cover from '../../assets/cover1.jpg';

export default function HeroSection() {
  return (
    <div className='herosection'>
      <div className='herosection-div1'>
        {/* <img className='hero-img-1' src={Pc} alt='' /> */}
        
      </div>
      <div className='herosection-div2'>
        {/*  Life is like coding; the best solutions often emerge from challenging problems. */}
       
        
        <p className='hero-p1'> {`if (life.challenges) {   `}</p>
        <p className='hero-p1'>{`     const solutions = code(challenges); `}</p>
        <p className='hero-p1'>{`     return solutions; `}</p>
        <p className='hero-p1'>{` } else { `}</p>
            <p className='hero-p1'>{`     return 'Keep coding your way through life!'; `}</p>
            <p className='hero-p1'>{` } `}</p>

   
      </div>
    </div>
  );
}              
