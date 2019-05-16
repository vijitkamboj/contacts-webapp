import React from 'react';
import './result.css';
import Cards from './cards/cards';
import Contacts from './details';

const contactArray= Contacts.map((user) => {
    return (
        <Cards key={user.id} name = {`${user.firstName} ${user.lastName}`} number={user.number} /> 
    )
});

function app(){
    return(
        <div id="result">
            {contactArray}          
        </div>
    )
};

export default app;