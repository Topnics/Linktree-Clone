import React from 'react'
import "./socials.css"
import Slack from "../../assets/images/slack.png"
import Git from "../../assets/images/github.png"

const Socials = () => {
  return (
    <div className="socials">
        <img src={Slack} alt="slack" />
        <img src={Git} alt="Github" />
    </div>
  )
}

export default Socials;