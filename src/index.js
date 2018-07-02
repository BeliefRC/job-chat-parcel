import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import reducer from './reducer'
import './public/axiosConfig'
import asyncComponent from './public/AsyncComponent'
import './public/index.less'
const AuthRoute = asyncComponent(
    () => import('./components/AuthRoute/AuthRoute'))
const LoginPage = asyncComponent(() => import('./container/LoginPage'))
const RegisterPage = asyncComponent(() => import('./container/RegisterPage'))

const reduxDevTools = window.devToolsExtension
    ? window.devToolsExtension()
    : () => {
    }



const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxDevTools,
))


ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute/>
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
            </Switch>
        </div>
    </BrowserRouter>
</Provider>, document.querySelector('#root'))

