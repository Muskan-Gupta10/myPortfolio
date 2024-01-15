import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Navbar from "./Navbar"
import Education from './ResumeComp/Education'
import Skills from './ResumeComp/Skills'
import Projects from './ResumeComp/Projects'
import '../Styles/resume.css'
const Resume = () => {
  return (
    <div id='resume'>
        <div className="mainLeft">
            
                <ul id='resumeUL'>
                    <li>< Link to="#education" smooth>Education</Link></li>
                    <li>< Link to="#skills" smooth>Skills</Link></li>
                    <li>< Link to="#projects" smooth>Projects</Link></li>
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