import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

/**
 * Import local de components
 */
import Header from '../Header';

const App = () => {
  return (
    <div>
      <Switch>
        <Route>
          <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;