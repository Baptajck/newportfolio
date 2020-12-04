import React from 'react';
import './Contact.scss';
/* Import SVG */
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FiCodesandbox } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Retrouvez moi sur mes réseaux sociaux</p>
      <ul className="contact-list">

        <li className="contact-list-item">
          <a href="https://www.linkedin.com/in/baptiste-parville/" className="contact-list-item-link">
            <span className="contact-list-item--span">
              LinkedIn
            </span>
            <FaLinkedin />
          </a>
        </li>

        <li className="contact-list-item">
        <a href="https://codesandbox.io/u/Baptajck" className="contact-list-item-link">
          <span className="contact-list-item--span">
            CodeSandbox
          </span>
          <FiCodesandbox />
        </a>
        </li>

        <li className="contact-list-item">
        <a href="https://github.com/Baptajck" className="contact-list-item-link">
          <span className="contact-list-item--span">
            GitHub
          </span>
          <FaGithub />
        </a>
        </li>
        
        <li className="contact-list-item">
        <a href="mailto:baptiste.parville@protonmail.com" className="contact-list-item-link">
          <span className="contact-list-item--span">
            Email
          </span>
          <IoIosMail />
        </a>
        </li>

      </ul>
    </div>
  )
}

export default Contact;