import React,{useEffect} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Education from './ResumeComp/Education'
import Skills from './ResumeComp/Skills'
import Projects from './ResumeComp/Projects'
import '../Styles/resume.css'
import { useLocation } from 'react-router-dom'

const Resume = () => {
  const location=useLocation()
 

  useEffect(() => {
    const handleScroll = () => {
      
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='resume'>
        <div className="mainLeft">
            
                <ul id='resumeUL'>
                  {console.log(location.hash)}
                    <li>< Link to="#education" className={location.hash === '#education' ? 'activeResume' : ''} smooth>Education</Link></li>
                    <li>< Link to="#skills"  className={location.hash === '#skills' ? 'activeResume' : ''} smooth>Skills</Link></li>
                    <li>< Link to="#projects"  className={location.hash === '#projects' ? 'activeResume' : ''} smooth>Projects</Link></li>
                </ul>
            
        </div>
        <div className="mainRight">
           
            <Education />
            <Skills />
            <Projects />
           
        </div>
        
        
    </div>
  )
}

export default Resume