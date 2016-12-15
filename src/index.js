import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App history={browserHistory}/>, document.getElementById('app'));
