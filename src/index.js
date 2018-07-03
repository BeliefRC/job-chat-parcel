import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import rootReducer from './redux'
import './configs/axiosConfig'
import asyncComponent from './components/AsyncComponent'
import './styles/index.less'
import AuthRoute from './components/AuthRoute'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'

/*const AuthRoute = asyncComponent(() => import('./components/AuthRoute'))
const LoginPage = asyncComponent(() => import('./containers/LoginPage'))
const RegisterPage = asyncComponent(() => import('./containers/RegisterPage'))*/

const reduxDevTools = window.devToolsExtension
    ? window.devToolsExtension()
    : () => {
    }

const configureStore = function () {
    const store = createStore(rootReducer, compose(
        applyMiddleware(thunk),
        reduxDevTools,
    ))
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(() => {
            const nextRootReducer = require('./redux').default
            store.replaceReducer(nextRootReducer, compose(
                applyMiddleware(thunk),
                reduxDevTools,
            ))
        })
    }
    return store
}

ReactDOM.render(<Provider store={configureStore()}>
    <BrowserRouter>
        <React.Fragment>
            <AuthRoute/>
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
</Provider>, document.querySelector('#root'))

