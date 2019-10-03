import React from "react";
import Styled from "styled-components"

const Button = Styled.button`
width:60px;
height:40px;
margin-left:50px;
margin-top:100px;
border:4px solid grey;
font-size:15px;
background:#205A4D;
color:white;

`
const Div  = Styled.div `
margin-left:70px;

`

const Dashboard = props => {
  return (
    <Div>
      <Button data-testid="strike-button" onClick={props.onstrikes}>strike</Button>
      <Button  data-testid="ball-button" onClick={props.onBall}>ball</Button>
      <Button  data-testid="foul-button" onClick={props.onFoul}>foul</Button>
      <Button  data-testid="hit-button" onClick={props.onHit}>hit</Button>
    </Div>
  );
};
export default Dashboard;
