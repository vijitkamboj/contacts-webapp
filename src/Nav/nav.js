import React from 'react';
import './nav.css';

function app(){
    return(
        <div id="nav">
            <div className="btn">About</div>
            <div className="btn"><a href="https://github.com/vijitkamboj/">GitHub</a></div>
            <div className="btn">Log In</div>
            <div className="btn" id="spc">Sign Up</div>
	    </div>
    )
}

export default app;