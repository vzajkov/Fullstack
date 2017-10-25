import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>

    <div className="header">
        <span class="Kelp">

          <span id="Kelp-title">Kelp  </span>
          <i className="fa fa-yelp" aria-hidden="true"></i>
        </span>
        <ul className='headerLinks'>
          <li><Link to="/login">Login </Link> </li>
          <li><Link to="/signup">Signup </Link> </li>
        </ul>
    </div>

    <div className="footer">
      <div className="footerLinks">
        <Link to="#">Github</Link>
        <Link to="#">MySpace</Link>
        <Link to="#">LinkedIn</Link>
      </div>
    </div>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />

  </div>
);


export default App;
