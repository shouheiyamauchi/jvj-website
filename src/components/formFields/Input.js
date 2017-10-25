import React from 'react';

const Input = ({ placeholder, id, label }) => (
  <div className="input-field">
    <input placeholder={placeholder} id={id} type="text" className="validate"/>
    <label for={id}>{label}</label>
  </div>
);

export default Input;
