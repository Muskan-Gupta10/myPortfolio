import React,{useEffect} from 'react'
import '../Styles/contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c7c6f4e-46c5-4548-8b17-8b02fda969d2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  }
  return (
    <div id='contact'  className='mediaContainer'>
       <div className="heading" data-aos='fade-right'>
          
          <h2>Contact</h2>
          Get in touch : <br />
          {/* <h3>Let's Connect</h3> */}
              <i>I'm currently seeking opportunities to leverage my unique blend of skills and experience to tackle exciting challenges in the tech industry. Whether you're looking for a motivated team member, have a project idea you'd like to discuss, or simply want to connect, I'd love to hear from you!<br/>
                Feel free to reach out to me
                </i>  
          </div>
      <div className="contactWrapper">
        
        <div className="contactLeft">
         
          <div className="circleImage" ><div id="image" ></div></div>
          
        </div>
        <div className="contactRight">
          <form  id='contactForm' action='https://formspree.io/f/mqkrezkg' method='POST'>
            <input type='text' placeholder='Your Name' name='name' className='inputs' required></input>
            <input type='text' placeholder='Email' name='email' className='inputs' required></input>
            <input type='text' placeholder='Subject' name='subject' className='inputs' required></input>
            <textarea className='textarea' name='message' rows="10" cols="41" placeholder='Message' required></textarea>
            
            <button type="submit" id='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact