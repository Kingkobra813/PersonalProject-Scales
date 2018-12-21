import React from 'react';

import { Switch, Route } from "react-router-dom";
import Auth from "./component/Auth/Auth"
import Main from "./component/Main/Main"
import Dashboard from "./component/Dashboard/Dashboard"


export default (
    <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/Main" component={Main} />
        <Route path="/Dashboard" component={Dashboard} />
    </Switch>
)