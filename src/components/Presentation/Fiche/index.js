import React from 'react'
import './Fiche.scss'

const Fiche = () => {
  return (
    <div className="fiche" id="presentation">
      <div className="fiche-container-infos">
        <h2 className="fiche-title">Présentation</h2>
        <h3 className="fiche-subtitle">Je suis un développeur web</h3>
        <p className="fiche-desc">Passionné par les nouvelles technologies depuis de nombreuses années, mon goût pour le développement web commence un peu par hasard après quelques cours pris sur OpenClassrooms. Je décide alors d'effectuer une reconversion professionnelle en suivant une formation intensive chez O'Clock. Pendant 5 mois, je découvre le métier de développeur web et web mobile. Depuis, j'approfondis les compétences acquises et je prends un réel plaisir à chercher, créer et développer. <br/>
        Retrouvez ici tous mes <a href="#projets" className="fiche-link">projets</a>.
        </p>
        <p className="fiche-desc">D'un naturel curieux, créatif et minutieux, je suis maintenant à la recherche d'un poste de développeur web en CDI/CDD. N'hésitez pas à me <a href="#contact" className="fiche-link">contacter</a> pour de plus amples informations.
        <br />Au plaisir d'échanger avec vous !
        </p>
      </div>
      <div className="fiche-container-img">
        <img src="https://i.imgur.com/aaU4uBv.jpg" alt="bureau et moi" className="fiche-img" />
      </div>
    </div>
  )
}

export default Fiche;