import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './nav';
import Cover from './cover';
import App from './app';


ReactDOM.render(<div id="container">
                            <Cover />
                            <App />
                            <Nav />
                            </div> 
                            , document.getElementById('root'));


