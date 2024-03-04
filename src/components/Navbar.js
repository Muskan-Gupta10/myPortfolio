import React, { useState } from 'react'
import '../Styles/navbar.css'
import { TfiMenuAlt } from "react-icons/tfi";
import initials from '../Assets/initials.png'
const Navbar = ({sections, activeSection, onNavClick}) => {
const [menuDisplay,setMenuDisplay]=useState(false)
  const handleMenuClick=()=>{
    const options= document.getElementsByClassName('options')[0]
    const initials= document.getElementsByClassName('initials')[0]
    
    setMenuDisplay(!menuDisplay)
    // console.log(options.style.display)
    if(menuDisplay==true){
      options.style.display='block'
      initials.style.display='none'
    }
    else{
      options.style.display='none'
      initials.style.display='block'
    }
    
  }
  const handleClick = (index) => {
    onNavClick(index);

    // Scroll to the corresponding section when a button is clicked
    const sectionIds = ['home', 'about', 'resume', 'contact'];
    const sectionId = sectionIds[index];
    const sectionElement = document.getElementById(sectionId);
    // console.log('handleClick - sectionId:', sectionId);
  // console.log('handleClick - sectionElement:', sectionElement);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
   
    
  };
  
// sticky navbar logic
 const [fixed,setFixed]=useState(false)

 function setFixedNavbar(){
  if(window.scrollY>=550){
    setFixed(true)
  }
  else setFixed(false)
 }
 window.addEventListener('scroll',setFixedNavbar)// sticky navbar logic
  
  return (
    
    
    <div className={fixed?"navbarContainer fixed":"navbarContainer"} mediaContainer>
      <span className="initials" ></span>
    
      <nav className="options">
       
        <ul className='ul'>
        {sections.map((section,index)=>(
          
          <li key={index} className={index===activeSection?'active':''}>
            <button className='navbtn' onClick={()=> handleClick(index)}>{section}</button>
          </li>
        ))}
        </ul>
        
      </nav>
     
      <TfiMenuAlt id='menubtn' onClick={handleMenuClick}/>
    </div>
    
  )
}

export default Navbar