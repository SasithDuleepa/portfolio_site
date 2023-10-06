import React from 'react';
import './about.css';
import Me from '../../assets/me.jpeg';

export default function About() {
  return (
    <div className='about'>

        <div className='about-div-1'>
            <h1 className='about-title'>About Me</h1>
            
            <h1 className='about-quote-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Donec euismod non arcu eget tincidunt. Donec vitae nisi eros.
                  Quisque mollis est elit, in finibus metus luctus id.
                   Proin convallis egestas velit, nec lobortis nunc sollicitudin non.
                    Proin tincidunt semper erat eget semper.
                 Etiam egestas nisl vel ipsum pretium interdum.</h1>
        </div>


        <div className='about-div-2'>
            <img src={Me} alt="me" className='about-img'/>
        </div>
    </div>
  )
}
