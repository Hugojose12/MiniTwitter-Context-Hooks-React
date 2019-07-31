import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import {ContextStore} from '../store';

export default () => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props=><ContextStore comp={<App />} store='user'/>} />
        </Switch>
    </BrowserRouter>

