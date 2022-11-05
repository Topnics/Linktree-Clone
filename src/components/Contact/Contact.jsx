import React from 'react'
import ContactText from '../Contact-heading/ContactText'
import ContactForm from '../ContactForm/ContactForm'
import Footer from "../Footer/Footer"
import "./contact.css"

const Contact = () => {
  return (
    
    <div className="contact">
      <div className="contact-form">
        <ContactText />
        <ContactForm />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>    
     
    
    
  )
}

export default Contact