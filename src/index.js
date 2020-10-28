import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';


ReactDOM.render(<App/>,
    document.getElementById('root')
);
