import React from 'react';
import './result.css';
import Cards from './cards/cards'


function app(props){
    return(
        <div id="result">
                <Cards  name={"Vijit Kamboj"} />
                <Cards  name={"Nikhil Chauhan"} />
                <Cards  name={"Raunak Negi"} />
                <Cards  name={"Kuldeep Singh"} />
                <Cards  name={"Suchitter Kumar"} />
                <Cards  name={"Sangeeta Rani"} />
                <Cards  name={"Srijan Kamboj"} />
                     
        </div>
    )
}

export default app;