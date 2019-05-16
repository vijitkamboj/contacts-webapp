import React from 'react';
import './cards.css';


function app(props){
    return(
        <div className="cards">
                <div className="dp-cont"><div className="dp"></div></div>
                <div className="name">{props.name}</div>
                <div className="cn">{props.number}</div>
        </div>
    )
}

export default app;