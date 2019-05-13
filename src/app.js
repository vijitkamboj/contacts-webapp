import React from 'react';
import './app.css';
import Search from './search';
import Result from './result';
function app(){
    return(
        <div id="app">
            <Search />
            <Result />
	    </div>
    )
}

export default app;