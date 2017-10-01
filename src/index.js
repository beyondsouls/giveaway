import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './reset.css';
import './index.css';

import AppView from './views/App';
import ErrorView from './views/Error';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/:showcase/:code" component={AppView} />
            <Route component={ErrorView} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
