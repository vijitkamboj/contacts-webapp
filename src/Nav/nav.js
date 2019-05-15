import React from 'react';
import './nav.css';

function app(){
    return(
        <div id="nav">
            <div className="navbtn">About</div>
            <div className="navbtn"><a href="https://github.com/vijitkamboj/" className="link">GitHub</a></div>
            <div className="navbtn">Log In</div>
            <div className="navbtn" id="spcbtn">Sign Up</div>
	    </div>
    )
}

export default app;