import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx';
import { AuthRoute } from '../util/route_util.js';
import BusinessIndex from './business_index.jsx';

const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/businesses" component={BusinessIndex} />
      </Switch>
  </div>);





export default App;
