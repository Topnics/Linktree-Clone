import React from 'react';
import "./footer.css";
import ZuriLogo from "../../assets/images/Zuri.Internship_Logo.png";
import IGLogo from "../../assets/images/I4G.png"

const Footer = () => {
  return (
   
    <div>

        <div className="footerFoot">
            <img src={ZuriLogo} alt="Zuri Logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={IGLogo} alt="I4G logo" />
        </div>
        
    </div>
  )
}

export default Footer;
