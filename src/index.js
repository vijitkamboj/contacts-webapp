import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware ,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMidlleware from 'redux-thunk';

import './index.css'
import Nav from './Nav/nav';
import Cover from './Cover/cover';
import App from './App/app';
import Footer from './Footer/footer';
import {searchContacts , requestContactsAPI} from './reducers';

const logger = createLogger();
const rootReducer =combineReducers({searchContacts, requestContactsAPI})
const store = createStore(rootReducer , applyMiddleware(thunkMidlleware,logger));

ReactDOM.render(<div id="container">
                            <Cover />
                            <Provider store = {store}><App /></Provider>
                            <Nav />
                            <Footer />
                            </div> 
                            , document.getElementById('root'));


