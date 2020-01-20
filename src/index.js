import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch, Router} from 'react-router-dom';
//import './index.css';
import Admin from './components/Admin/Admin.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./saas/main.scss";
// Sass app asset

import "./app-assets/app-asset-main.scss";




 

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
