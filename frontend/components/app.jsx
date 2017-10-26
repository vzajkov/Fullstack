import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx';
import { AuthRoute } from '../util/route_util.js';
import BusinessIndexContainer from './businesses/business_index_container.jsx';

const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/businesses" component={BusinessIndexContainer} />
      </Switch>
  </div>);





export default App;
