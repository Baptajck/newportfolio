import React from 'react';
import ButtonScrollToTop from '../ButtonScrollToTop';

import './Versionning.scss';

const Versionning = () => {
  
  const date = new Date();
  return (
    <div className="version">
      <ButtonScrollToTop />
      <div className="footer">
        <p className="footer-text">&copy; {date.getFullYear()} Baptiste Parville - <sup>2.0.0</sup></p>
      </div>
    </div>
  )
}

export default Versionning;