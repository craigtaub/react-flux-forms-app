import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Index from '../components/index.jsx';
import Edit from '../components/edit.jsx';
import Parent from '../components/parent.jsx';

function getRoutes(isClient = false) {
    console.log('getRoutes + ', isClient);
    return (
        <Router history={isClient ? browserHistory : null}>
            <Route path="/" component={Parent}>
                <Route path="index" component={Index}/>
                <Route path="edit" component={Edit}/>
            </Route>
        </Router>
    );

}

export {
    getRoutes
};
