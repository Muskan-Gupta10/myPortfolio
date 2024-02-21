import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Resume from "./components/Resume";
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';



function App() {

  const [activeSection,setActiveSection]= useState(0)

  const handleNavClick=(index)=>{
    setActiveSection(index)
  }

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
  
      if (element && element.offsetTop-100 <= scrollPosition && element.offsetTop + element.offsetHeight -100> scrollPosition) {
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
    <Footer/> 
     
    </div>
  );
}

export default App;
