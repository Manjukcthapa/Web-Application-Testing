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

  handleBall = (e) => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    }else this.handleHit(e)
  };

  handleStrikes = (e) => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }else this.handleHit(e)
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

  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  render() {
    return (
      <div>
        <Display game={this.state} />
        <Dashboard
          onBall={this.handleBall}
          onstrikes={this.handleStrikes}
          onFoul={this.handleFoul}
          onHit={this.handleHit}

        />
      </div>
    );
  }
}

export default App;
