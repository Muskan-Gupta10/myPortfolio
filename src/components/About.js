import React from 'react'
import '../Styles/about.css'
const About = () => {
  return (
    <div id='about'>
        <div className="aboutContainer">
            <div className="photo"></div>
            <div className="aboutDetails">
                <h1>About Me</h1>
                <div className="info i1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat alias minima, laudantium eligendi quasi? Sequi magni nemo nihil porro dolores dignissimos, veniam nostrum autem laborum quaerat quam velit modi.</div>
                <div className="info i2">
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default About