import Layer1 from "../assets/MobileAssets/Layer11.svg";
import Layer2 from "../assets/MobileAssets/Layer21.svg";
import Layer3 from "../assets/MobileAssets/Layer31.svg";
import Layer4 from "../assets/MobileAssets/Layer41.svg";
import Layer5 from "../assets/MobileAssets/Layer51.svg";
import Layer6 from "../assets/MobileAssets/Layer61.svg";
import Layer7 from "../assets/MobileAssets/Layer71.svg";

import Logo from '../assets/logo1.png'
import Countdown from "../components/Countdown";

const MobileHome = () => {
  return (
    <div className="MobileHome" id="MobileHome">
      <div className="Mountains">
        <img src={Layer7} alt="Mountains" className="InDown"/>
        <img src={Layer6} alt="Mountains" className="InDown"/>
        <img src={Layer5} alt="Mountains" className="InDown"/>
        <img src={Layer4} alt="Mountains" className="InDown"/>
        <img src={Layer3} alt="Mountains" className="InDown"/>
        <img src={Layer2} alt="Mountains" className="InDown"/>
        <img src={Layer1} alt="Mountains" className="InDown"/>
      </div>
      <div className="Home">
        <img src={Logo} alt="HackJNU" id="HomeLogo"/>
        <div id="HomeCountdown">
          <Countdown />
        </div>
        <div className="alert">
          <p className="slide">
            <p className="AlertText">Slide to switch page</p>
            <span className="AlertIcon">{">"}</span>
            </p>
          <p className="pcAlert">For full experience of the website , please see the desktop version</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
