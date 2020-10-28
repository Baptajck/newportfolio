import React from 'react';
import './Competences.scss';
/* Import SVG */
import { DiHtml5, DiMysql, DiScrum, DiPhp, DiPython } from 'react-icons/di';
import { IoLogoJavascript,IoLogoNodejs } from 'react-icons/io';
import { FaReact, FaGithub, FaTrello, FaVuejs } from 'react-icons/fa';


const Competences = () => {
  return (
    <div className="competences" id="competences">
      <h2 className="competences-t">Compétences</h2>
      <div className="competences-u">
        {/* HTML / CSS */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><DiHtml5 /></div>
            <h2 className="competences-title">HTML5 / CSS3</h2>
            <p className="competences-text">Élaboration - Conception graphique - Intégration - Référencement SEO.</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* JS */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><IoLogoJavascript /></div>
            <h2 className="competences-title">Javascript</h2>
            <p className="competences-text">Contenu dynamique et interactif - Jquery - Json - AJAX.</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* React / Redux */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><FaReact /></div>
            <h2 className="competences-title">React / Redux</h2>
            <p className="competences-text">Interface utilisateur interactive - Composants autonomes - Cycle de vie / Logique d'interaction - Optimisations des performances.</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* NodeJS */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><IoLogoNodejs /></div>
            <h2 className="competences-title">NodeJS</h2>
            <p className="competences-text">Applications réseau évolutives - Construction d'une API - Gestion côté serveur.</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* GitHub */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><FaGithub /></div>
            <h2 className="competences-title">GitHub</h2>
            <p className="competences-text">Outil de développement <br /> git init / git commit / git push ....</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* MySQL */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><DiMysql /></div>
            <h2 className="competences-title">MySQL</h2>
            <p className="competences-text">Base de donnée - Requêtes SQL</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* SCRUM */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><DiScrum /></div>
            <h2 className="competences-title">Scrum</h2>
            <p className="competences-text">Méthode - Sprints - Délais - Réunions</p>
          </div>
          <hr  className="competences-hr"/>
        </div>
        {/* Trello */}
        <div className="competences-container--width">
          <div className="competences-container">
            <div className="competences-svg"><FaTrello /></div>
            <h2 className="competences-title">Trello</h2>
            <p className="competences-text">Tableau - Organisation - Idées - Tâches</p>
          </div>
        </div>
      </div>
      {/* Notions */}
      <div className="notion">
        <h2 className="notion-title">Notions</h2>
        <ul className="notion-list">
          <li className="notion-list-item"><span className="competences-svg"><FaVuejs /></span><span className="competences-svg-title">VueJS</span></li>
          <li className="notion-list-item"><span className="competences-svg"><DiPhp /></span><span className="competences-svg-title">PHP</span></li>
          <li className="notion-list-item"><span className="competences-svg"><DiPython /></span><span className="competences-svg-title">Python</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Competences;