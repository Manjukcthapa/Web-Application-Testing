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

  handleReset = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  handleBall = e => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else this.handleReset(e);
  };

  render() {
    return (
      <div>
        <Display reset={handleReset} game={this.state} />
        <Dashboard onBall={this.handleBall} />
      </div>
    );
  }
}

export default App;
