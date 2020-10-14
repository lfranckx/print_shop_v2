import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route 
          component={Home}
          path="/"
        />
      </Switch>
    </>
  );
}

export default App;
