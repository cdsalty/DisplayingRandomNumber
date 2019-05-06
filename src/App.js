import React, { Component } from 'react';
// import logo from './logo.svg';
import RandoNumber from './RandoNumber';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <RandoNumber maxNumber={7} />
      </div>
    );
  }
}

export default App;
