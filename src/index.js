import React from 'react'
import ReactDOM from 'react-dom'
import {Provider , Connector} from 'react-redux';
import {createStore} from 'redux';
import './index.css'
import Nav from './Nav/nav';
import Cover from './Cover/cover';
import App from './App/app';
import Footer from './Footer/footer';
import { searchContacts } from './reducers';

const store = createStore(searchContacts)

ReactDOM.render(<div id="container">
                            <Cover />
                            <Provider store = {store}><App /></Provider>
                            <Nav />
                            <Footer />
                            </div> 
                            , document.getElementById('root'));


