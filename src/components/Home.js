import React from 'react'
import '../Styles/home.css'
import coverImage from '../Assets/CoverImg2.jpg'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
    
    <div id="homeContainer" >
      <div className="home" >
        <div style={{position:'absolute',width:'100vw'}}>
        <Navbar />
        <div className="homeContent">
          <div className='box b1'>Hi! I'm Muskan Gupta</div>
          <div className='box b2'>I am a FullStack Developer</div>

          <div className="cvLink">Download CV</div>
          </div>
        </div>
      
      </div>
      
    </div>
    </>
  )
}

export default Home