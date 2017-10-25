import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>

    <span className="header">
      <h1 id="Kelp">Kelp</h1>
    </span>

    <span className="footer">
      <h2 id="footerInfo">Welcome to my footer!</h2>
    </span>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />

  </div>
);


export default App;
