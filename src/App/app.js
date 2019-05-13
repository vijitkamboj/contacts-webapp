import React from 'react';
import './app.css';
import Search from './Search/search';
import Result from './Result/result';
function app(){
    return(
        <div id="app">
            <Search />
            <Result />
	    </div>
    )
}

export default app;