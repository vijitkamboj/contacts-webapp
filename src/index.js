import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './Nav/nav';
import Cover from './Cover/cover';
import App from './App/app';
import Footer from './Footer/footer';



ReactDOM.render(<div id="container">
                            <Cover />
                            <App />
                            <Nav />
                            <Footer />
                            </div> 
                            , document.getElementById('root'));


