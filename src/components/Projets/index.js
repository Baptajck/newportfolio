import React, { useState } from 'react';
import './Projets.scss';

import CustomPrompt from './CustomPrompt';
import data from './data.js';


const Projets = () => {
  const [open, isOpen] = useState(false);
  const [pro, isPro] = useState(null);
  const toggle = () => {
    isOpen(!open);
  }

  const getId = (e) => {
    isPro(+e.target.id)
  }

  return (
    <div className="project" id="project">
      <h2 className="project-title">Projets</h2>
      <div className="project-container">

        {
          data.map((data, id) => {
            return (
              <div key={id} className="project-container-solo" onMouseEnter={getId}>
                <img src={data.image} alt={data.name} className="project-container-img" onClick={toggle} id={id}/>
                <p className="project-container-title">{data.title}</p>
              </div>
            )
          })
        }

        {
          open && (
            <CustomPrompt
              open={open}
              // name={data[pro].name}
              toggle={toggle}
              // image={data[pro].image}
              data={data[pro]}
            />
          )
        }

      </div>
    </div>
  )
}

export default Projets;