import React from 'react';
import './Header.scss';
import Nav from './Nav';
import { useWindowSize } from '../../utils';

const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className="header">
      <h1 className="header-title">baptjack</h1>
      {
        width <= 768 ? (
          <Nav />
        ) : (
          <ul className="header-list">
            <li className="header-list-item"><a href="#presentation">Présentation</a></li>
            <li className="header-list-item"><a href="#competences">Compétences</a></li>
            <li className="header-list-item"><a href="#projets">Projets</a></li>
            <li className="header-list-item"><a href="#contact">Contact</a></li>
          </ul>
        )
      }
    </header>
  );
}

export default Header;