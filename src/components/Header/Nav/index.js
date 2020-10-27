import React, { useState } from 'react';
import './Nav.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [open, isOpen] = useState(false);

  const toggle = () => isOpen(!open);
  
  return (
    <div className="nav">
      {/* <div className="nav-burger" onClick={toggle}>{!open ? <GiHamburgerMenu /> : <MdClose />}</div> */}

      {/*
        open && (
          <ul className="nav-list">
            <li className="nav-list-item">Presentation</li>
            <li className="nav-list-item">Compétences</li>
            <li className="nav-list-item">Projets</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        )
      */}

      <nav>
        <div className="nav-burger" onClick={toggle}>{!open ? <GiHamburgerMenu /> : <MdClose />}</div>
        <ul className={`nav-links ${open ? "open nav-links" : ''}`}>
            <li className={open ? "fade" : ''}><a href="#presentation" onClick={toggle}>Présentation</a></li>
            <li className={open ? "fade" : ''}><a href="#competences" onClick={toggle}>Compétences</a></li>
            <li className={open ? "fade" : ''}><a href="#projets" onClick={toggle}>Projets</a></li>
            <li className={open ? "fade" : ''}><a href="#contact" onClick={toggle}>Contact</a></li>
            {/* 
              <li><button className="login-button" href="#">Login</button></li>
              <li><button className="join-button" href="#">Join</button></li>
            */}
        </ul>
    </nav>
    </div>
  );
}

export default Nav;