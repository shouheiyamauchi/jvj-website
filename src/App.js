import React, { Component } from 'react';
import Padding from './components/misc/Padding'
import Button from './components/buttons/Button';
import Logo from './components/misc/Logo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Padding/>
        <Logo/>
        <Button url="https://www.google.com" color="red" text="Hello"/>
      </div>
    );
  }
}

export default App;
