// Template for Session Form produced by App Academy, edited for purposes of project
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLinks = this.toggleLinks.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/businesses');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin() {
    return this.props.login({user: {username: 'Valery', password:'starwars'}});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  toggleLinks() {
    if (this.props.formType === 'login') {
      return(
       <div className="toggle-div">
         <span className="newToKelpLink">New to Kelp?
         <Link id="toggle-link" to="/signup"> Sign Up</Link>
         </span>
       </div>);
    } else {
      return(
        <div className="toggle-div">
          <span className="haveKelpLink">Have an account?
          <Link id="toggle-link" to="/login"> Log In</Link>
          </span>
       </div>);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    debugger
    return (
      <div className="login-form-container">
        <div className="creds-inputs-wrapper">
          <span className="welcome">Welcome to Kelp!</span>
          <br/>
          <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div id="session-errors">{this.renderErrors()}</div>
            {this.toggleLinks()}
            <div className="login-form">
              <label className="usernameContainer">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"/>
              </label>
                <br/>
              <label className="passwordContainer">
                <input
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  type="password"
                  placeholder="Password"/>
              </label>
              <br/>
              <input className="submit-cred" type="submit" value="Submit" />
            </div>
          </form>
      </div>
        <img id="welcome-img" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
      </div>
    );
  }
}

export default withRouter(SessionForm);
