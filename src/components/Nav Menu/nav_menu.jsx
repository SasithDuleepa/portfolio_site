import React from 'react';
import './nav_menu.css';
import home from './../../assets/home.png'
import boy from './../../assets/boy.png'
import contact from './../../assets/contact.png'
export default function Nav_menu() {
  return (
    <div className='nav_menu'>
        <div className='nav_menu_container'>

            <div className='nav_menu_div'>
                <a className='nav_menu_a' href='#'>
                    <p className='nav_menu_p'>Home</p>
                    <img src={home} alt="" className='nav_menu_img'/>
              
                </a>
            </div>

            <div className='nav_menu_div'>
                <a className='nav_menu_a' href='#'>
                    <p className='nav_menu_p'>About</p>
                    <img src={boy} alt="" className='nav_menu_img'/>
                </a>
            </div>

            <div className='nav_menu_div'>
                <a className='nav_menu_a' href='#'>
                    <p className='nav_menu_p'>Contact</p>
                    <img src={contact} alt="" className='nav_menu_img'/>
                </a>
            </div>


            
            

        </div>
    </div>
  )
}
