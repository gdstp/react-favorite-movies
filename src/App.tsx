import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppProvider } from './Context/AppContext';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

import './styles.css'

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
