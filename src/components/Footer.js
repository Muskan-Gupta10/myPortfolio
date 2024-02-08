import React from 'react'
import '../Styles/footer.css'
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    const githubUrl='https://github.com/Muskan-Gupta10/'
    const linkedInProfileUrl='https://www.linkedin.com/in/muskan-gupta-19a90626b/'
    const TwitterProfileUrl='https://twitter.com/MuskanGupta__10'
  return (
    <div id='footer'>
        Socials
        <h6>connect with me</h6>
        <div id="footerContent">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"> <VscGithub/></a>
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer"> <BsLinkedin/></a>
        <a href={TwitterProfileUrl} target="_blank" rel="noopener noreferrer"> <FaTwitter/></a>
        
        
        </div>
    </div>
  )
}

export default Footer