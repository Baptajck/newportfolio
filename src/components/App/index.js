import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

/* Import local de components */
import Spinner from '../Spinner';
import Header from '../Header';
import Presentation from '../Presentation';
import Competences from '../Competences';
import Projets from '../Projets';
import Contact from '../Contact';
import Versionning from '../Versionning';


const App = () => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 2000);
  }, []);

  return (
    <div className="app">
    {loading && (<Spinner loading={loading}/>)}
    {!loading && (
        <Route>
          <Header />
          <Presentation />
          <Competences />
          <Projets />
          <Contact />
          <Versionning />
        </Route>
    )}
    </div>
  );
}

export default App;