import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link, Switch } from 'react-router-dom';

const Landing = () => (
  <div className="landing-background">

    <div className="header">
        <span className="Kelp">

          <span id="Kelp-title">Kelp  </span>

       </span>
        <ul className='headerLinks'>
          <li><Link to="/login">Login</Link> </li>
          <li><Link to="/signup">Signup</Link> </li>
        </ul>


    </div>

    <div id="img-wrapper">
      <img id="landing_img" src="https://goo.gl/JzKBj1"></img>
    </div>



  </div>
);

export default Landing;
