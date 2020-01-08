import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducer from "./reduces/index"
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
serviceWorker.unregister();
