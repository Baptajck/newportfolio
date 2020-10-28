import React from 'react';
import './Projets.scss';

import data from './data.js';


const Projets = () => {
  return (
    <div className="project" id="project">
      <h2 className="project-title">Projets</h2>
      <div className="project-container">
        {
          data.map(({ prompt: { urlSite }, name, image, title, comingSoon }, id) => (
            <a href={urlSite} className="project-container-solo" key={id} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="project-container-img"/>
                <p className="project-container-title">{title}</p>
                {comingSoon && <p className="project-container-soon">développement</p>}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Projets;