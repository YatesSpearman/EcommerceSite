import React from 'react';

function Button(props){
    return(
        <button className="generalButton" onClick={props.onClick}>
            {props.name}
            
        </button>
    );
}

export default Button;