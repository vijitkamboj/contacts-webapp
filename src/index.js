import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Results from './results';
import * as serviceWorker from './serviceWorker';

var res = document.getElementById('app-cont')
ReactDOM.render(<Results />, res,);


serviceWorker.register();
