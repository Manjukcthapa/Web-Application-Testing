import React from "react";
import Styled from "styled-components"

const H1 = Styled.h1`
margin-left:60px;
border:4px solid grey;
text-align:center;
width:60px;
margin-top:60px;
background:#D5432F;
`
const Div = Styled.div`
display:flex;
margin-top:30px;
margin-left:150px;
`

const Display = props => {
    return(
        <Div>
            <H1>{props.game.balls}</H1> 
            <H1>{props.game.strikes}</H1>
        </Div>
    )
}

export default Display;