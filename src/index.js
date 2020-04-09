import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

import jwtDecode from "jwt-decode"

import {Provider} from "react-redux"
import {configureStore} from "./redux"
import { setAuthorizationHeader,addUser } from './redux/action/user';

const store = configureStore()

if(localStorage.userToken){
    setAuthorizationHeader(localStorage.userToken);
    try{
        store.dispatch(addUser(jwtDecode(localStorage.userToken)))
    }catch(e){
        store.dispatch(addUser({}))
    }
}

ReactDOM.render(
<Provider store={store}>
<Router>
    <App />
</Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
