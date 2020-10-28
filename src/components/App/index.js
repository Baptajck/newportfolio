import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

/**
 * Import local de components
 */
import Header from '../Header';
import Presentation from '../Presentation';
import Competences from '../Competences';
import Projets from '../Projets';


const App = () => {
  return (
    <div className="app">
        <Route>
          <Header />
          <Presentation />
          <Competences />
          <Projets />
        </Route>
    </div>
  );
}

export default App;