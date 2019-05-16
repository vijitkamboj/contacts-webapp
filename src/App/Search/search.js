import React from 'react';
import './search.css';

function app({searchChange}){
    return(
        <div id="searchBar">
            <div id="sicon"></div>
            <input 
            type="text" 
            id="sinput" 
            placeholder="Search the contacts"
            onChange = {searchChange}
            />
        </div>
    )
}

export default app;