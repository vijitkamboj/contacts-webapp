import React from 'react';
import './cards.css';


function app(props){
    return(
        <div className="cards">
                <div className="dp-cont"><div className="dp"></div></div>
                <div className="name">{props.name}</div>
                <div className="cn">85555957579</div>
        </div>
    )
}

export default app;