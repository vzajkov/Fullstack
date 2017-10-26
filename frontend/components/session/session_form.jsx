import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return(
       <div>
         <span className="newToKelpLink">New to Kelp?
         <Link to="/signup"> Sign Up</Link>
         </span>
       </div>);
    } else {
      return(
        <div>
          <span className="haveKelpLink">Have an account?
          <Link to="/login"> Log In</Link>
          </span>
       </div>);
    }
  }

  renderErrors() {
    debugger
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <span className="welcome">Welcome to Kelp!</span>
          <br/>
          {this.renderErrors()}
          {this.navLink()}
          <div className="login-form">
            <label className="usernameContainer">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"/>
            </label>
            <br/>
            <label className="passwordContainer">
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"/>
            </label>
            <br/>
            <input className="submit-cred" type="submit" value="Submit" />
          </div>
        </form>
        <img id="welcome-img" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
      </div>
    );
  }
}

export default withRouter(SessionForm);
