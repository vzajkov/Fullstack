import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx';
const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
      </Switch>
  </div>);





export default App;
