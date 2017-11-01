import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import BusinessShowContainer from './businesses/business_show_container.jsx';
import SearchContainer from './search/search_container.jsx';
import ReviewFormContainer from './reviews/review_form_container.jsx';
const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path="/businesses" component={SearchContainer} />
        <ProtectedRoute path="/businesses/:id" component={BusinessShowContainer} />
        <ProtectedRoute path="/reviews/new" component={ReviewFormContainer} />
      </Switch>

      <div className="footer">
        <div className="footerLinks">
          <a href="https://github.com/vzajkov">Github</a>
          <a href="https://www.facebook.com/valery.zajkov">Facebook</a>
          <a href="https://www.linkedin.com/in/valeryzajkov/">LinkedIn</a>
        </div>
      </div>


  </div>);





export default App;
