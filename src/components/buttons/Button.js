import React from 'react';

const Button = ({ url, color, text }) => (
  <a href={url} className={`waves-effect waves-light btn ${color}`}>{text}</a>
);

export default Button;
