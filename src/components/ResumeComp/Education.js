import React, { useState,useEffect } from 'react'
import '../../Styles/education.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Education = () => {

  useEffect(()=>{
    AOS.init({duration:1500})
},[])
  const [showEducation,setShowEducation]=useState(true)
  const handleToggle=()=>{
    setShowEducation(!showEducation)
  }

  const educationContent=
    (
      <>
        <div className="line l1"></div>
      <div className="dots d1"></div>
      <div className="dots d2"></div>
      <div className="dots d3"></div>
      <div className="dots d4"></div>
      <div className="eduContent" data-aos='fade-up'>
        <div className="eduLeft">
          <div className="leftContent lc1">December 2022 to April 2023</div>
          <div className="leftContent lc2">August 2017 to August 2021</div>
          <div className="leftContent lc3">2015 to 2017</div>
          <div className="leftContent lc4">2015</div>
        </div>
        <div className="eduRight" data-aos='fade-up'>
        <div className="rightContent rc1">
          <h3>
            Full-Stack Development BootCamp
          </h3>
          6-month full-time program focused on DS/Algos & Full-stack Tech
          </div>
          <div className="rightContent rc2"> 
          <h3>B.Tech in Computer Science Engineering</h3>
          Calcutta Institute of Technology
          </div>
          <div className="rightContent rc3">
          <h3>Higher Secondary- Class XII</h3>
          S.E. Railway Girls' Higher Secondary School
          </div>
          <div className="rightContent rc4">2015</div>
          <h3>Secondary - Class X</h3>
            Kharagpur Hitakarini Higher Secondary School
        
        </div>
        
      </div>
      <div className="eduContentsmall" data-aos='fade-up'>
        
      <div className="upperContent uc1">December 2022 to April 2023</div>
      <div className="linesmall"></div>
      <div className="dotsSmall d5 "></div>
      <div className="lowerContent lowc1">
          <h3>
            Full-Stack Development BootCamp
          </h3>
          6-month full-time program focused on DS/Algos & Full-stack Tech
          </div>

          <br /><br />

          <div className="upperContent uc2">August 2017 to August 2021</div>
          <div className="linesmall"></div>
      <div className="dotsSmall d6"></div>
      <div className="lowerContent lowc2"> 
          <h3>B.Tech in Computer Science Engineering</h3>
          Calcutta Institute of Technology
          </div>

          <br /><br />

          <div className="upperContent uc3">2015 to 2017</div>
          <div className="linesmall"></div>
      <div className="dotsSmall d7"></div>
      <div className="lowerContent lowc3">
          <h3>Higher Secondary- Class XII</h3>
          S.E. Railway Girls' Higher Secondary School
          </div>

      <br /><br />

      <div className="upperContent uc4">2015</div>
      <div className="linesmall"></div>
      <div className="dotsSmall d8"></div>
      <div className="lowerContent lowc4">
          <h3>Secondary - Class X</h3>
            Kharagpur Hitakarini Higher Secondary School
        
        </div>

        </div>
      </>
    )
  
  const experienceContent=(
    <>
        <div className="line l2"></div>
      <div className="dots d1"></div>
      <div className="expContent" data-aos='fade-up'>
        <div className="expLeft">
          <div className="expleftContent elc5">October 2021 to Present</div>
        </div>
        <div className="expRight">
        <div className="exprightContent erc5">
          <h3>
            Wipro Ltd.
          </h3>
          Project Engineer
          </div>
         
        
        </div>
      </div>
      <div className="expContentsmall" data-aos='fade-up'>
          <div className="expupperContent euc5">October 2021 to Present</div>
        
      <div className="linesmall"></div>
      <div className="dotsSmall d9"></div>
      <div className="explowerContent elowc5">
          <h3>
            Wipro Ltd.
          </h3>
          Project Engineer
          </div>
      </div>
     
      </>
  )

  
  return (
    <div id="education"> 
    <button className='b btn1' onClick={handleToggle}>my Education</button>
    <button className='b btn2' onClick={handleToggle}>my Experience</button>
     {showEducation? educationContent:experienceContent}
       </div>
  )
}

export default Education