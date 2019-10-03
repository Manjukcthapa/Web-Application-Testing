import React from "react";

const Display = props => {
    return(
        <div>
            <h2>{props.game.balls}</h2>
            <h2>{props.game.strikes}</h2>
        </div>
    )
}

export default Display;