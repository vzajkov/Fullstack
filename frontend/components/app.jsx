import React from 'react';
import SessionFormContainer from './session/session_form_container.jsx';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Kelp</h1>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);


export default App;
