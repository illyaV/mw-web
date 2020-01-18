import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Posts from '../posts'

function Content() {
    return (
        <div className="app-content">
            <Switch>
                <Route path="/posts" component={Posts}/>
                <Redirect push to="/posts"/>
            </Switch>
        </div>
    );
}

export default Content;