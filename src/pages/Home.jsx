import "../styles/Home.css";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import MountainsLayer0 from "../img/frame0.svg";
import MountainsLayer1 from "../img/frame1.svg";
import MountainsLayer2 from "../img/frame4.svg";
import MountainsLayer3 from "../img/frame3.svg";
import MountainsLayer4 from "../img/frame5.svg";
import MountainsLayer5 from "../img/frame6.svg";
import MountainsLayer6 from "../img/hj4.svg";
import MountainsLayer7 from "../img/frame7.svg";
import MountainsLayer8 from "../img/frame8.svg";
import MountainsLayer9 from "../img/frame9.svg";
import MountainsLayer10 from "../img/frame101.svg";
import MountainsLayer11 from "../img/frame11.svg";
import MountainsLayer12 from "../img/MountainsLayer12.svg";
import Background from "../img/bg11.svg";

// import TimerCard from '../components/Countdown'
import Countdown from "../components/Countdown";

const Home = () => {
  let speedMult;
  if(screen.width>=1150){
    speedMult=5;
  }
  else{
    speedMult=0;
  }
  return (
    <div className="HomePage">
      <ParallaxBanner className="HomeBanner">
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={0*speedMult}>
          <img src={Background} alt="" className="MountainLayer" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer12} alt="" className="MountainLayer mt-[5.625vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer11} alt="" className="MountainLayer mt-[4.5vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-4*speedMult}>
          <img src={MountainsLayer10} alt="" className="MountainLayer mt-[4.5vw%]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-3*speedMult}>
          <img src={MountainsLayer9} alt="" className="MountainLayer mt-[3.375vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-2*speedMult}>
          <img src={MountainsLayer8} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-1*speedMult}>
          <img src={MountainsLayer7} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-5*speedMult}>
          <img src={MountainsLayer6} alt="" className="MountainLayer HomeLogoSVG" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={1*speedMult}>
          <img src={MountainsLayer5} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={2*speedMult}>
          <img src={MountainsLayer4} alt="" className="MountainLayer mt-[2.25vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={-2*speedMult}>

          {/* TIMER */}
        
          <div className="TimerCardGap"></div>
          <Countdown/>
        
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={3*speedMult}>
          <img src={MountainsLayer3} alt="" className="MountainLayer mt-[3.375vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={4*speedMult}>
          <img src={MountainsLayer2} alt="" className="MountainLayer mt-[4.5vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={5*speedMult}>
          <img src={MountainsLayer1} alt="" className="MountainLayer mt-[5.625vw]" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="ParallaxBannerLayer" speed={6*speedMult}>
          <img src={MountainsLayer0} alt="" className="MountainLayer mt-[6.75vw]" />
          <div className="spaceFiller"></div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default Home;
