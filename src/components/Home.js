import React,{useEffect} from 'react'
import '../Styles/home.css'
//import coverImage from '../Assets/CoverImg2.jpg'
//import Navbar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <>
    
    <div id="home" className='mediaContainer'>
      <div className="homeContainer" >
        <div style={{position:'absolute',width:'100vw'}}>
        {/* <Navbar /> */}
        <div className="homeContent">
          <div className='box b1'>Hi! I'm Muskan Gupta</div>
          <div className='box b2'>I am a FullStack Developer</div>
          <a href='Muskan Resume.pdf' download='Resume.pdf'>
          <div className="cvLink" data-aos='fade-up'>Download CV</div>
          </a>
          </div>
        </div>
      
      </div>
      
    </div>
    </>
  )
}

export default Home