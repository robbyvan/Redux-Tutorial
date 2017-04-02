import 'babel-polyfill'

import React from 'react';
import { render } from "react-dom"

import { createStore } from 'redux'
import { AllReducers } from './reducers/AllReducers'

import { App } from './components/App'


const store = createStore(AllReducers);


window.React = React;

render(
    <App />,
    document.getElementById('root')
);
