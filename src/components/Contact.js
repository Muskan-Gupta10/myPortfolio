import React from 'react'
import '../Styles/contact.css'
const Contact = () => {
  return (
    <div id='contactWrapper'>
      
      <div className="contact">
        <div className="contactLeft">
          <div className="heading">
          Get in touch 
          <h2>Contact</h2>
          <div className="circleImage"></div>
          </div>
        </div>
        <div className="contactRight">
          <form action="#" id='contactForm'>
            <input type='text' placeholder='Your Name' className='inputs'></input>
            <input type='text' placeholder='Email' className='inputs'></input>
            <input type='text' placeholder='Subject' className='inputs'></input>
            <textarea className='textarea'  rows="10" cols="41" placeholder='Message'></textarea>
            
            <button type="submit" id='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact