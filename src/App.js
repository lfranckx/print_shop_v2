import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import ItemsContext from './Contexts/ItemsContext';

import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';
import Products from './Routes/Products/Products';
import Footer from './Components/Footer/Footer';

class App extends Component {
  static contextType = ItemsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          {this.state.error && <p className="error">There was an error.</p>}
          <Switch>
            <Route 
              exact path="/"
              component={Home}
            />
            <Route 
              exact path="/products"
              component={Products} 
            />
          </Switch>
          <Footer />
        </main>
      </>
    )
  }
}

export default withRouter(App);
