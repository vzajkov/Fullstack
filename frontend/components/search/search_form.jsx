import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(filter) {
    debugger
    return e => {
      return this.props.updateFiltering(filter, e.currentTarget.value);
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    debugger
    return (
      <div>

        <nav className="navbar">
          <button id="log-out-button" onClick={this.props.logout} >Log Out</button>
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <input type="radio" name="Smoking?" value="true" onChange={this.update('smoking')}/>
            Smoking <br/>
            <input type="radio" name="Smoking?" value="false" onChange={this.update('smoking')}/>
            Non-Smoking <br/>
            <input type="submit" value="Search"/>
          </form>
        </nav>

      </div>
    );
  }


}

export default withRouter(SearchForm);
