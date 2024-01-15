import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Resume from "./components/Resume";
import Contact from './components/Contact'
import { useEffect, useState } from 'react';

function App() {

  const [activeSection,setActiveSection]= useState(0)

  const handleNavClick=(index)=>{
    setActiveSection(index)
  }

  // const handleScroll=() =>{
  //   const sectionOffsets = {
  //     home: document.getElementById('home').offsetTop,
  //     about: document.getElementById('about').offsetTop,
  //     resume: document.getElementById('resume').offsetTop,
  //     contact: document.getElementById('contact').offsetTop,
  //   };
  //   console.log(sectionOffsets.home,sectionOffsets.about,sectionOffsets.resume);
  //   const scrollPosition= window.scrollY
  //   // if (scrollPosition < AboutOffset) {
  //   //   setActiveSection(0);
  //   // } 
  //   // else if (scrollPosition < ResumeOffset) {
  //   //   setActiveSection(1);
  //   // } 
  //   // else if (scrollPosition < ContactOffset) {
  //   //   setActiveSection(2);
  //   // } 
  //   // else {
  //   //   setActiveSection(3);
  //   // }
  //   let activeSection = 0;

  // if (scrollPosition >= sectionOffsets.about) {
  //   activeSection = 1;
  // }

  // if (scrollPosition >= sectionOffsets.resume) {
  //   activeSection = 2;
  // }

  // if (scrollPosition >= sectionOffsets.contact) {
  //   activeSection = 3;
  // }

  // setActiveSection(activeSection);

  // }

  const handleScroll = () => {
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const resumeElement = document.getElementById('resume');
    const contactElement = document.getElementById('contact');
  
    const elements = [homeElement, aboutElement, resumeElement, contactElement];
  
    const scrollPosition = window.scrollY;
  
    let activeSection = 0;
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
  
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        activeSection = i;
        break;
      }
    }
  
    setActiveSection(activeSection);
  };
  

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


  return (
    <div className="App">
   
      <Navbar sections={['Home','About','Resume','Contact']} activeSection={activeSection} onNavClick={handleNavClick}/>
    <Home id='home'/>
    <About id='about'/>
    <Resume id="resume"/>
    <Contact id='contact'/>
    </div>
  );
}

export default App;
