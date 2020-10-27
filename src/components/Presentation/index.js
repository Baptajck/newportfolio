import React from 'react';
import './Presentation.scss';

import Entete from './Entete';
import Fiche from './Fiche';

const Presentation = () => {

  return (
    <div className="presentation">
      <Entete />
      <Fiche />
    </div>
  )
}

export default Presentation;