import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import ParticlesBg from "particles-bg";

ReactDOM.render(
  <React.StrictMode>
    <div className="center">GROWLANCE ASSIGNMENT #ROUND 1 !</div>
    <App />
    <ParticlesBg type="lines" bg={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);
