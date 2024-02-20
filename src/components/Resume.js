import React,{useEffect,useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Education from './ResumeComp/Education'
import Skills from './ResumeComp/Skills'
import Projects from './ResumeComp/Projects'
import '../Styles/resume.css'
import { useLocation } from 'react-router-dom'


const Resume = () => {
  // const location=useLocation()
 
  // return (
  //   <div id='resume'>
  //       <div className="mainLeft">
            
  //               <ul id='resumeUL'>
                
  //                   <li>< Link to="#education"   className={location.hash === '#education' ? 'activeResume' : ''} smooth>Education</Link></li>
  //                   <li>< Link to="#skills"  className={location.hash === '#skills' ? 'activeResume' : ''} smooth>Skills</Link></li>
  //                   <li>< Link to="#projects" className={location.hash === '#projects' ? 'activeResume' : ''} smooth>Projects</Link></li>
  //               </ul>
            
  //       </div>
  //       <div className="mainRight">
        
  //           <Education id="education"/>
  //           <Skills id="skills"/>
  //           <Projects id="projects"/>
          
  //       </div>
        
        
  //   </div>

  const sections=["Education","Skills","Projects"]
  const [activeSection,setActiveSection]= useState(0)

  const handleNavClick=(index)=>{
    setActiveSection(index)
    const sectionIds = ['education', 'skills', 'projects'];
    const sectionId = sectionIds[index];
    const sectionElement = document.getElementById(sectionId);
  

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScroll = () => {
    const eduElement = document.getElementById('education');
    const skillsElement = document.getElementById('skills');
    const projectsElement = document.getElementById('projects');
    
  
    const elements = [eduElement, skillsElement, projectsElement];
  
    const scrollPosition = window.scrollY;
  
    let activeSection = 0;
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      // console.log("plus",element.offsetTop + element.offsetHeight )
      // console.log("top",element.offsetHeight)
      if (element && element.offsetTop-100 <= scrollPosition && element.offsetTop + element.offsetHeight -100> scrollPosition) {
        activeSection = i;
        
        break;
      }
    }
    // console.log("Scroll Position:", scrollPosition);
    // console.log("Active Section:", activeSection);
   
    setActiveSection(activeSection);
  };
  

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


 
  return (
    <div id='resume' className='mediaContainer'>
        <div className="mainLeft">
            
                <ul id='resumeUL'>
                {sections.map((section,index)=>(
                  <li key={index} className={index===activeSection?'activeResume':''} >
                    <a onClick={()=>handleNavClick(index)}>{section}</a>
                  </li>
                ))}
                </ul>
            
        </div>
        <div className="mainRight">
        
            <Education id="education"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
          
        </div>
        
        
    </div>
  )
}

export default Resume