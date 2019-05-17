import React from 'react';
import './result.css';
import Cards from './cards/cards';

function app({contactArray}){
    return(
        <div id="result">
            {contactArray.map((user) => {
                return (
                    <Cards 
                    key={user.id} 
                    name = {user.name} 
                    number={user.phone} 
                    /> 
                )
            }
            ) 
            }        
        </div>
    )
};

export default app;