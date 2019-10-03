import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.onstrikes}>strike</button>
      <button onClick={props.onBall}>ball</button>
      <button onClick={props.onFoul}>foul</button>
      <button>hit</button>
    </div>
  );
};
export default Dashboard;
