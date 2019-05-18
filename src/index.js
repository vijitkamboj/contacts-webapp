import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css'
import Nav from './Nav/nav';
import Cover from './Cover/cover';
import App from './App/app';
import Footer from './Footer/footer';
import {searchContacts} from './reducers';

const logger = createLogger();
const store = createStore(searchContacts , applyMiddleware(logger));



ReactDOM.render(<div id="container">
                            <Cover />
                            <Provider store = {store}><App /></Provider>
                            <Nav />
                            <Footer />
                            </div> 
                            , document.getElementById('root'));


