import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/"/>
      </Switch>
    </>
  );
}

export default App;
