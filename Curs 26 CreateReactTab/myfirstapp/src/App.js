import React, { Component } from 'react';
import './App.css';

import Timer from './components/timer.js';

class App extends Component {
  render() {
    const name = "Alban";
    return (
      <div>
        <h1>{name} first app</h1>
        <Timer label="Date and time"/>
        <Timer />
        </div>
    );
  }
}

export default App;
