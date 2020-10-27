import React from 'react'
import './Entete.scss'

const Entete = () => {
  return (
    <div className="entete">
      <div className="entete-container--img">
        <img src="https://i.imgur.com/HR0AvNr.jpg" alt="moi en en tete" className="entete-losange" />
      </div>
      <div className="entete-container--infos">
        <h1 className="entete-title">Je suis Baptiste Parville</h1>
        <p className="entete-job">Développeur Web Fullstack</p>
        <button className="entete-button"><a href="#contact">Contactez moi</a></button>
      </div>
    </div>
  )
}

export default Entete;