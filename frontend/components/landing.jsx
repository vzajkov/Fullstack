import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';

const Landing = () => (
  <div className="landing-background">

    <ul className='headerLinks'>
      <li><Link to="/login">Login</Link> </li>
      <li><Link to="/signup">Signup</Link> </li>
      <li><Link to="/login">Demo Login</Link> </li>
    </ul>

    <span id="Kelp-title">Kelp  </span>



  </div>
);

export default Landing;
