import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Projects from './Projects';
import NotFound from './NotFound';
import Navbar from './Navbar';

const Main = () => (
    <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
        </Switch>
    </div>
)

export default Main;