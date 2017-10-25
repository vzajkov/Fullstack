import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';

const Landing = () => (
  <div>

    <div className="header">
        <span className="Kelp">

          <span id="Kelp-title">Kelp  </span>
          <i className="fa fa-yelp" aria-hidden="true"></i>
       </span>
        <ul className='headerLinks'>
          <li><Link to="/login">Login</Link> </li>
          <li><Link to="/signup">Signup</Link> </li>
        </ul>
    </div>


    <img id="landing_img" src="https://goo.gl/JzKBj1"></img>


    <div className="footer">
      <div className="footerLinks">
        <Link to="#">Github</Link>
        <Link to="#">MySpace</Link>
        <Link to="#">LinkedIn</Link>
      </div>
    </div>


  </div>
);

export default Landing;
