import React, { useState } from 'react'
import '../../Styles/projects.css'
import { VscGithub } from "react-icons/vsc";
import { BsGit } from 'react-icons/bs';

const Projects = () => {
  const [isHovered,setIsHovered]=useState([false, false, false, false, false, false, false, false]);
  const handleMouseEnter = (index) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;
    setIsHovered(updatedHovered);
  };

  const handleMouseLeave = (index) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = false;
    setIsHovered(updatedHovered);
  };
  return (
    <div id='projects'>
      <div id='heading1'>Projects</div>
      <div className="projectsWrapper ">
        <div className="project1  p1" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
        {isHovered[0] &&(<div className="overlay">
        <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
        </div>
        <div className="project2  p2" onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
        {isHovered[1] &&(<div className="overlay">
        <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
        </div>
      </div>
      <div className="projectsWrapper ">
      <div className="project1  p3" onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>handleMouseLeave(2)}>
      {isHovered[2] &&(<div className="overlay">
      <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
      </div>
        <div className="project2  p4" onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>handleMouseLeave(3)}>
        {isHovered[3] &&(<div className="overlay">
        <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
        </div>
      </div>
      <div className="projectsWrapper ">
      <div className="project1  p5" onMouseEnter={()=>handleMouseEnter(4)} onMouseLeave={()=>handleMouseLeave(4)}>
      {isHovered[4] &&(<div className="overlay">
      <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
      </div>
        <div className="project2 p6" onMouseEnter={()=>handleMouseEnter(5)} onMouseLeave={()=>handleMouseLeave(5)}>
        {isHovered[5] &&(<div className="overlay">
        <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
        </div>
      </div>
      <div className="projectsWrapper ">
      <div className="project1  p7" onMouseEnter={()=>handleMouseEnter(6)} onMouseLeave={()=>handleMouseLeave(6)}>
      {isHovered[6] &&(<div className="overlay">
      <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
      </div>
        <div className="project2  p8" onMouseEnter={()=>handleMouseEnter(7)} onMouseLeave={()=>handleMouseLeave(7)}>
        {isHovered[7] &&(<div className="overlay">
        <button id='b1'>Github<VscGithub/></button>
            <button id='b2'>checkout project</button>
          </div>
        )}
        </div>
      </div>
       </div>
  )
}

export default Projects