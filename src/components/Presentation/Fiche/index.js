import React from 'react'
import './Fiche.scss'

const Fiche = () => {
  return (
    <div className="fiche" id="presentation">
      <div className="fiche-container-infos">
        <h2 className="fiche-title">Présentation</h2>
        <h3 className="fiche-subtitle">Je suis en développeur web</h3>
        <p className="fiche-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni itaque fugit nulla iusto laborum. Id ut rerum unde reiciendis ipsa nisi aut, sunt sapiente quaerat nemo, vitae recusandae hic quas eaque eos cum fuga? Ullam repellendus saepe, expedita consequatur non maiores ea quos placeat repudiandae consequuntur quaerat officiis quidem laborum.</p>
      </div>
      <div>
        <img src="https://i.imgur.com/aaU4uBv.jpg" alt="bureau et moi" className="fiche-img" />
      </div>
    </div>
  )
}

export default Fiche;