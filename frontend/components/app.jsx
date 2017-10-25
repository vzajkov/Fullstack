import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>

    <div className="header">
      <span>
        <span id="Kelp">Kelp
          <i className="fa fa-yelp" aria-hidden="true"></i>
        </span>
      </span>
    </div>

    <div className="footer">
      <div className="Links">
        <Link to="#">Github</Link>
        <Link to="#">MySpace</Link>
        <Link to="#">LinkedIn</Link>
      </div>
    </div>

    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />

  </div>
);


export default App;
