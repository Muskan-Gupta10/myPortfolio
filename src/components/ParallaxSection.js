import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import '../Styles/parallax.css';

function ParallaxSection() {
  return (
    <div className="Pllx">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="heading">About</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="mountains"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="animation_layer parallax" id="trees"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.25}>
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">What is Firewatch?</h1>
                <p id="textblock-content">
                The year is 1989.<br/><br/>
                You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.<br/><br/>
                An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to youat all times over a small, handheld radio—and is your only contact with the world you've left behind.<br/><br/>
                But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
                </p>
            </div>
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;