import React from 'react';
import './projectCard.css';

import Pos from '../../assets/pos.jpg';

export default function ProjectCard() {
  return (

    <div>


<main>
  <div className = "card">
    <img src={Pos} alt=""/>
    <div className="card-content">
      <h2 className='card-title'>
        POS System
      </h2>
      <p className='card-text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <a href="#" className="card-findmore">
        Find out more 
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>
    </div>
  )
}
