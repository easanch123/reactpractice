import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import allReducer from './reducers/index';
import { Provider } from 'react-redux'
import reduxThunk from "redux-thunk"
import "bootstrap/dist/css/bootstrap.min.css"

const myStore = createStore( allReducer, {}, applyMiddleware( reduxThunk ) )


ReactDOM.render(
        <Provider store = {myStore}>
            <App />
        </Provider>, 
        document.getElementById('root')
        );



serviceWorker.unregister();
