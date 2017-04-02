import 'babel-polyfill'

import React from 'react';
import { render } from "react-dom"

import { createStore } from 'redux'
import { AllReducers } from './reducers/AllReducers'
import { Provider } from 'react-redux'

import App from './components/App.js'


const store = createStore(AllReducers);


window.React = React;

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
