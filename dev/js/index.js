import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import AllReducers from './reducers/AllReducers.js';

//create main store
const store = createStore(AllReducers);

ReactDOM.render(
    <h1>hey now</h1>,
    document.getElementById('root')
);
