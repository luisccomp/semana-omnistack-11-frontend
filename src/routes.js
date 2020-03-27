import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
