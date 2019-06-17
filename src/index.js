import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.querySelector('#root'));


