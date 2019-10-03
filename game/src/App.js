import React, { Component } from "react";
import Display from "./Component/Display";
import Dashboard from "./Component/Dashboard";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    }
  };

  handleStrikes = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }
  };

  handleFoul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        };
      });
    }
  };

  render() {
    return (
      <div>
        <Display game={this.state} />
        <Dashboard onBall={this.handleBall} onstrikes={this.handleStrikes}  onfoul = {this. handleFoul}/>
      </div>
    );
  }
}

export default App;
