import React, { Component } from 'react';

import Button from '../components/buttons/Button';
import Input from '../components/formFields/Input'
import Logo from '../components/misc/Logo';
import Padding from '../components/misc/Padding'

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Padding/>
        <Input id="username" label="Username"/>
        <Button url="https://www.google.com" color="blue" text="Register"/>
        <Button url="https://www.google.com" color="red" text="Return to Login"/>
      </div>
    );
  }
}

export default Register;
