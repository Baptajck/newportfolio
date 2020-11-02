import React, { useState } from 'react';
import './Nav.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [open, isOpen] = useState(false);

  const toggle = () => isOpen(!open);
  
  return (
    <div className="nav">
      <nav>
        <div className="nav-burger" onClick={toggle}>{!open ? <GiHamburgerMenu /> : <MdClose />}</div>
        <ul className={`nav-links ${open ? "open nav-links" : ''}`}>
            <li className={open ? "fade" : ''}><a href="#presentation" onClick={toggle} className="nav-links-item">Présentation</a></li>
            <li className={open ? "fade" : ''}><a href="#competences" onClick={toggle}>Compétences</a></li>
            <li className={open ? "fade" : ''}><a href="#project" onClick={toggle}>Projets</a></li>
            <li className={open ? "fade" : ''}><a href="#contact" onClick={toggle}>Contact</a></li>   
        </ul>
    </nav>
    </div>
  );
}

export default Nav;