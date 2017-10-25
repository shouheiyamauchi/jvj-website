import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NavBar from './NavBar'
import Home from './Home';
import Register from './Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <div className="container">
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/register" component={Register}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
