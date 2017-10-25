import React, { Component } from 'react';

import Button from '../components/buttons/Button';
import Input from '../components/formFields/Input'
import Logo from '../components/misc/Logo';
import Padding from '../components/misc/Padding'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Padding/>
        <Logo/>
        <Padding/>
        <Input id="username" label="Username"/>
        <Input id="password" label="Password"/>
        <Button url="" color="blue" text="Login"/>
        <Button url="" color="red" text="Register"/>
      </div>
    );
  }
}

export default Home;
