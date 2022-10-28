import React from "react";
import './avatar.css';
import ProfilePics from "../../assets/images/profile__img.png"
import Camera from "../../assets/images/camera_icon.png"

const Avatar = ()=> {
    return (
        <div className="avi">
            <div className="profilepics" id="profile_img">
                <img src={ProfilePics} alt="" />

                <div className="icon_wrapper">
                    <img src={Camera} alt="camera icon" />
                </div>
            </div>
            <h1>Temitope Osifalujo</h1> 
        </div>
    );
}

export default Avatar;