import React from 'react'
import '../Styles/about.css'

import { Parallax } from 'react-parallax';
import bg1 from '../Assets/bg1.jpg'
import bg2 from '../Assets/bg2.jpg'

const About = () => {
  return (
    <div id='about' className='mediaContainer'>
        <div className="aboutContainer">
            <div className="photoContainer">
                {/* <div className="photo">
                <img src={photo} alt="Your Photo" className="photoImage" />
                 <img src={frame} alt="Frame" className="frameImage" /> }
                <div className="topRightShadow"></div>
                <div className="bottomLeftShadow"></div>
                </div> */}
                
            </div>
            <div className="aboutDetails">
                
                <h1>About Me</h1><br/>
                <div className="info i1">
                    <p>Hey there! 👋 I'm Muskan Gupta, a passionate and enthusiastic full-stack developer with a Bachelor's degree in Computer Science and Engineering. I have a keen interest in building innovative web applications. While my professional background may not be strictly tech-focused, my passion for coding and problem-solving led me to pursue a career in software development.
                </p><br/>

                
                 <h3>What I Bring to the Table</h3>
                <p>🚀 With over 2 years of corporate experience in a non-tech role at a service-based company, I've developed strong communication, project management, and teamwork skills that complement my technical expertise.<br/><br/>

🌐 My journey into software development began as a personal interest, and I've since honed my skills in both front-end and back-end technologies to build robust, scalable applications.<br/><br/>

💡 Continuous learning and growth are at the core of my ethos, and I'm committed to staying updated with the latest advancements in the tech industry to deliver cutting-edge solutions.</p><br/>
                <h3>Why You Should Work With Me</h3>
                <p>
                🔧 I thrive in fast-paced environments and excel at adapting to new challenges, leveraging my diverse background to bring a fresh perspective to every project I undertake.<br/><br/>

🎨 My eye for detail and passion for user-centric design ensure that the applications I develop not only meet technical requirements but also deliver seamless and engaging user experiences.<br/><br/>

📈 With a track record of delivering results and exceeding expectations, I'm driven by a desire to make a meaningful impact and contribute to the success of any team or project.<br/>
                </p><br />
                {/* <h3>Let's Connect</h3>
              <i><p id='pcontact'>I'm currently seeking opportunities to leverage my unique blend of skills and experience to tackle exciting challenges in the tech industry. Whether you're looking for a motivated team member, have a project idea you'd like to discuss, or simply want to connect, I'd love to hear from you!<br/>
                Feel free to reach out to me</p>
                </i>   */}
                </div>
                    {/* <div className="info i2">
                    <div className="sec1">
                        Name:<br/>
                        <br/>
                        Date of birth:<br/> <br/>
                        Address:<br/> <br/>
                         Zip code:<br/> <br/> 
                        Email:<br/> <br/>
                         Phone:<br/> 
                    </div>
                    <div className="sec2">
                        Muskan Gupta<br/> <br/>
                        February 10,2000<br/> <br/>
                        Kharagpur, West Bengal<br/> <br/>
                         721301<br/> <br/> 
                        muskangupta1018@gmail.com<br/> <br/>
                        7063649990
                    </div>
                </div> */}


            </div>
        </div>

        {/* <Parallax className='image' blur={0} bgImage={bg1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
    <div className='text-box'>
             <h3 >First Class Ticket</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus accusantium, quam odio
            repudiandae mollitia eos sapiente quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam! Eius repellendus voluptates ducimus
            perspiciatis officiis adipisci quibusdam amet, officia omnis quas id minus ipsam, aliquam qui voluptas quo
            veritatis dolores vero magnam inventore sed numquam dignissimos a nisi. Tempore dolorem provident illo natus
            velit temporibus fugiat odio aperiam a sunt et harum autem sequi officiis quos distinctio quis nihil, modi
            eveniet commodi animi non accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil impedit odio sed.
        </p>
        </div>
        <Parallax className='image' blur={0} bgImage={bg2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
    <div className='text-box'>
             <h3 >First Class Ticket</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus accusantium, quam odio
            repudiandae mollitia eos sapiente quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam! Eius repellendus voluptates ducimus
            perspiciatis officiis adipisci quibusdam amet, officia omnis quas id minus ipsam, aliquam qui voluptas quo
            veritatis dolores vero magnam inventore sed numquam dignissimos a nisi. Tempore dolorem provident illo natus
            velit temporibus fugiat odio aperiam a sunt et harum autem sequi officiis quos distinctio quis nihil, modi
            eveniet commodi animi non accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil impedit odio sed.
        </p>
        </div> */}
    </div>
  )
}

export default About