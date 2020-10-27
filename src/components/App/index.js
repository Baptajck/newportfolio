import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

/**
 * Import local de components
 */
import Header from '../Header';
import Presentation from '../Presentation';
import Competences from '../Competences';


const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route>
          <Header />
          <Presentation />
          <Competences />
        </Route>
      </Switch>
    </div>
  );
}

export default App;