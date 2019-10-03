import React, { Component } from "react";
import Display from "./Component/Display";
import Dashboard from "./Component/Dashboard";
import Styled from "styled-components";

const Div = Styled.div`
border:3px solid grey;
margin-left:400px;
width:600px;
height:400px;
margin-top:100px;
background:#112982;
`
const H1 = Styled.h1 `
padding-left:200px;
color:white;
margin-top:20px;
`


import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  handleBall = e => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else this.handleHit(e);
  };

  handleStrikes = e => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else this.handleHit(e);
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
      <Div>
        <H1>Dark Game</H1>
        <Display game={this.state} />
        <Dashboard
          onBall={this.handleBall}
          onstrikes={this.handleStrikes}
          onFoul={this.handleFoul}
          onHit={this.handleHit}
        />
      </Div>
    );
  }
}

export default App;
