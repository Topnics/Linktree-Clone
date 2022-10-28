import React from "react";
import './share.css'
import shareImg from "../../assets/images/share_button.png"
import sharePng from "../../assets/images/avatar_share.png"

const Share = ()=> {
    return (
        <div className="icon">
            <img className="web" src={shareImg} alt="" />
            <img className="mobile" src={sharePng} alt="" />
        </div>
    );
}

export default Share;