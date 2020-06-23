import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import GlobalStateProvider from './store/GlobalStateProvider';
import './assets/style/reset.css';

ReactDOM.render((
        <GlobalStateProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" name="Home" component={App}/>
                    </Switch>
                </BrowserRouter>
            
        </GlobalStateProvider>
),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
