import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Posts from '../posts'
import Post from '../post'

function Content() {
    return (
        <div className="app-content">
            <Switch>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/posts/:id" component={Post}/>
                <Redirect push to="/posts"/>
            </Switch>
        </div>
    );
}

export default Content;