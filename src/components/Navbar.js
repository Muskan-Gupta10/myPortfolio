import React, { useState } from 'react'
import '../Styles/navbar.css'

const Navbar = ({sections, activeSection, onNavClick}) => {

  const handleClick = (index) => {
    onNavClick(index);

    // Scroll to the corresponding section when a button is clicked
    const sectionIds = ['home', 'about', 'resume', 'contact'];
    const sectionId = sectionIds[index];
    const sectionElement = document.getElementById(sectionId);
    console.log('handleClick - sectionId:', sectionId);
  console.log('handleClick - sectionElement:', sectionElement);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
   
    
  };
  

 const [fixed,setFixed]=useState(false)

 function setFixedNavbar(){
  if(window.scrollY>=550){
    setFixed(true)
  }
  else setFixed(false)
 }
 window.addEventListener('scroll',setFixedNavbar)
  
  return (
    
    
    <div className={fixed?"navbarContainer fixed":"navbarContainer"}>
      <span className="initials">MG</span>
      <nav className="options">
       
        <ul id='ul'>
        {sections.map((section,index)=>(
          
          <li key={index} className={index===activeSection?'active':''}>
            <button onClick={()=> handleClick(index)}>{section}</button>
          </li>
        ))}
        </ul>
      </nav>
      
    </div>
    
  )
}

export default Navbar