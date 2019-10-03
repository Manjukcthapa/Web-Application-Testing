import React, { Component } from 'react';
import Display from "./Component/Display"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls:0,
      strikes:0
    };
  }
  render() {
    return (
      <div >
        <Display game={this.state}/>
      </div>
    );
  }
}

export default App;
