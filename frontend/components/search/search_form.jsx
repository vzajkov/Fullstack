import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(filter) {
    return e => {
      if (e.currentTarget.value === 'on') {
        debugger
          return this.props.props.updateFiltering(filter, false);
      } else {
         debugger
         return this.props.props.updateFiltering(filter, true);
      }
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
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <div className="preferencesFilter">
            <input type="radio" name="Smoking?" value={true} onChange={this.update('smoking')}/>
            Smoking <br/>
            <input type="radio" name="Smoking?" onChange={this.update('smoking')}/>
            Non-Smoking <br/>
            <input type="radio" name="Parking?" value={true} onChange={this.update('parking')}/>
              Parking <br/>
            <input type="radio" name="Parking?" onChange={this.update('parking')}/>
              Parking Not Necessary <br/>
            <input type="radio" name="Wifi?" value={true} onChange={this.update('wifi')}/>
              Has Wifi <br/>
            <input type="radio" name="Wifi?" onChange={this.update('wifi')}/>
              Wifi Not Necessary <br/>
            <input type="radio" name="Takeout?" value={true} onChange={this.update('takeout')}/>
              Takeout <br/>
            <input type="radio" name="Takeout?" onChange={this.update('takeout')}/>
          </div>

          <div className = "priceFilter">
            <input type="radio" name="$" value='$' onChange={this.update('price')}/>
              $ <br/>
            <input type="radio" name="$$" value='$$' onChange={this.update('price')}/>
              $$ <br/>
            <input type="radio" name="$$$" value='$$$' onChange={this.update('price')}/>
              $$$ <br/>
            <input type="radio" name="$$$$" value='$$$$' onChange={this.update('price')}/>
              $$$$ <br/>
          </div>
            <input type="submit" value="Search"/>
          </form>
        </nav>

      </div>
    );
  }


}

export default withRouter(SearchForm);
