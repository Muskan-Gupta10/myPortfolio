import React, { useEffect, useState } from 'react';
import '../../Styles/skills.css';
//import ProgressBar from "@ramonak/react-progress-bar";



//this funstion will handle linear progress
const Skill2=({ id, label, endValue })=>{

  const [progress, setProgress] = useState(0);

  // useEffect to handle the progression of the progress bar
useEffect(() => {
  let interval;

  const handleScroll=()=>{
    
    const element= document.getElementById('skillsWrapper')
    if(element){
      const rect=element.getBoundingClientRect();
      //check if the element is inside the view port
      const isInView= rect.top<=window.innerHeight && rect.bottom>=0

      // Check if progress is less than the specified endValue
      if (isInView && progress < endValue) {
        // Set up an interval to increment the progress every 100 milliseconds
        interval = setInterval(() => {  
          setProgress(prev => (prev < endValue ? prev + 1 : prev));// this conditional rendering is for double safety that the value doesnt exceed end val
        }, 200);
      }
      else{
        clearInterval(interval)
      }
    }
  }
  window.addEventListener('scroll',handleScroll)
  
  

  return () => {
    window.removeEventListener('scroll',handleScroll)
    clearInterval(interval);
  };
}, [progress, endValue,id]);

  
  return(
    <div id={id}>
      <h3>{label}</h3>
      <span>{progress}%</span>
      <div className='linearProgress'>
        
        <div className="linearProgressValue" style={{width:`${progress}%`}}></div>
        
      </div>
    </div>
  )
}


//this funstion will handle circular progress
const Skill = ({ id, label, endValue }) => {
  
  const [progress, setProgress] = useState(0);

  // useEffect to handle the progression of the progress bar
  useEffect(() => {
  let interval;

  const handleScroll=()=>{
    
    const element= document.getElementById('skillsWrapper')
    if(element){
      const rect=element.getBoundingClientRect();
      const isInView= rect.top<=window.innerHeight && rect.bottom>=0

      // Check if progress is less than the specified endValue
      if (isInView && progress < endValue) {
        // Set up an interval to increment the progress every 50 milliseconds
        interval = setInterval(() => {  
          setProgress(prev => (prev < endValue ? prev + 1 : prev));// this conditional rendering is for double safety that the value doesnt exceed end val
        }, 50);
      }
      else{
        clearInterval(interval)
      }
    }
  }
  window.addEventListener('scroll',handleScroll)
  
  

  return () => {
    window.removeEventListener('scroll',handleScroll)
    clearInterval(interval);
  };
}, [progress, endValue,id]);

  // Calculate the gradient angle based on the progress percentage
  const gradientAngle = (progress / 100) * 360;

  return (
    <div className="skills-container" id={id}>
      <div className="circular-progress" style={{ background: `conic-gradient(rgb(89, 79, 66)  ${gradientAngle}deg, #ededed 350deg)` }}>
        <span className="progress-value">{`${progress}%`}</span>
      </div>
      <span className="skills-text">{label}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <div id='heading'>Skills</div>
    <div id="skillsWrapper">
      {/* passing diff values for diff skill cards in skill function */}
      <Skill id="progress1" label="React" endValue={90} />
      <Skill id="progress2" label="Node JS" endValue={75} />
      <Skill id="progress3" label="JavaScript" endValue={70} />
      <Skill id="progress4" label="Mongo DB" endValue={85} />
    
    </div>
<br/>
    <div className="skills2">
      {/* <div className="div1">
        <Skill2 id="progress5" label="Data Structure And Algorithm" endValue={65}/>
        <br/>
        <Skill2 id="progress6" label="Tailwind CSS" endValue={80}/>
        
      </div>
      <div className="div2">
      <Skill2 id="progress7" label="Html5" endValue={70}/>
      <br/>
        <Skill2 id="progress8" label="CSS3" endValue={75}/>
      </div> */}
          <div className="divprogress">
        <Skill2 id="progress5" className="prog" label="Data Structure And Algorithm" endValue={65}/>
        
        <Skill2 id="progress6" className="prog" label="Tailwind CSS" endValue={80}/>
        
      <Skill2 id="progress7" className="prog" label="Html5" endValue={70}/>
     
        <Skill2 id="progress8" className="prog" label="CSS3" endValue={75}/>
      </div> 
    </div>
    <br/>
    </div>

 
    

  );
};

export default Skills;


