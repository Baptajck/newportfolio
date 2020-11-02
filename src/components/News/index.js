import React from 'react';
import './News.scss';

const News = () => {

  return (
    <div className="news">

      <div className="ticker">
        {/*
        <div className="ticker-tip">
          <div className="ticker-tip-info">
            <i className ="icon-info">i</i>
            <span>The Gas Mask will make you look like a badass.<span>
          </div>
        </div>
        */}

        <div className="ticker-title">
          <div className="ticker-title-container">
            <p className="ticker-title-container-item">Actualité</p>
            <p className="ticker-title-container-item">Actualité</p>
            <p className="ticker-title-container-item">Actualité</p>
            <p className="ticker-title-container-item">Actualité</p>
            <p className="ticker-title-container-item">Actualité</p>
          </div>
        </div>
        <div className="ticker-news">
          <div className="ticker-news-container">
            <p className="ticker-news-container-item">Criminals attempt brazen robbery at downtown bank...</p>
            <p className="ticker-news-container-item">Citizens are encouraged to use alternate routes during rush hour...</p>
            <p className="ticker-news-container-item">Citizens are encouraged to use alternate routes during rush hour...</p>
            <p className="ticker-news-container-item">Citizens are encouraged to use alternate routes during rush hour...</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default News;