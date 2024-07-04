import React from 'react';
import ReactDOM from 'react-dom';
import 'framework7/css/framework7.bundle.min.css';
import Framework7 from 'framework7-react';
import App from './App';

Framework7.use();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
