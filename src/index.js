import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Hello greetings={'Hello' + ' React Ninja'} />, document.getElementById('root'));  // greetings is a property that could be access in Hello.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
