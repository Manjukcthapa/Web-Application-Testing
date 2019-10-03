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
      <Button onClick={props.onstrikes}>strike</Button>
      <Button onClick={props.onBall}>ball</Button>
      <Button onClick={props.onFoul}>foul</Button>
      <Button onClick={props.onHit}>hit</Button>
    </Div>
  );
};
export default Dashboard;
