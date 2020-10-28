import React from 'react'
import './Fiche.scss'

const Fiche = () => {
  return (
    <div className="fiche" id="presentation">
      <div className="fiche-container-infos">
        <h2 className="fiche-title">Présentation</h2>
        <h3 className="fiche-subtitle">Je suis un développeur web</h3>
        <p className="fiche-desc">Je m'appelle Baptiste Parville et ma passion pour le développement web commence un peu par hasard après quelques cours pris sur OpenClassrooms. Fort de cette découverte, je décide de changer de cap et de me lancer pleinement dans le développement web. Après 4 mois de formation intensive chez O'Clock, qui m'ont conforté dans mon idée, je me lance avec 3 de mes collègues dans un projet se voulant novateur et inédit : GameBook. A la fin de la formation, j'ai souhaité mettre mes compétences fraîchement acquises en action et c'est ainsi qu'est né : LikeMovie. Je cherche désormais à mettre mes compétences au service de votre entreprise.</p>
      </div>
      <div className="fiche-container-img">
        <img src="https://i.imgur.com/aaU4uBv.jpg" alt="bureau et moi" className="fiche-img" />
      </div>
    </div>
  )
}

export default Fiche;