import React from 'react';
import './customPrompt.scss';

const Prompt = ({open, toggle, name, image, titleMessage, message, tech, urlSite, urlCode }) => {
  if (!open) return null;
  return (
    <div className="prompt-blur" onClick={toggle}>
      <div className="prompt">
        <div className="prompt-1">
          <div className="prompt-head">
            <h3 className="prompt-head-title">{name}</h3>
          </div>

          <img src={image} alt={name} className="prompt-img"/>

          <div className="prompt-container">
            <p className="prompt-title-message">{titleMessage}</p>
            <p className="prompt-message">{message}</p>
            <hr className="prompt-hr"/>
            <p className="prompt-title-message">{tech}</p>

            <div className="prompt-groupLink">
              <a href={urlSite} className="prompt-groupLink-item">Site</a>
              <a href={urlCode} className="prompt-groupLink-item">Code</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prompt;
