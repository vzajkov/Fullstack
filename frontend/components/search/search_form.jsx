import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(filter) {
    return e => {
      //debugger
      if (e.currentTarget.checked) {
        //debugger
          return this.props.props.updateFiltering(filter, true);
      } else {
         //debugger
         return this.props.props.updateFiltering(filter, false);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    //debugger
    return (
      <div>

        <nav className="navbar">
          <button id="log-out-button" onClick={this.props.props.logout} >Log Out</button>
          <form >
            <input id="search-bar" type="text" placeholder="Search for businesses"/>

          </form>


        <nav className="filter-nav">
          <form className="filter-bar" onSubmit={this.handleSubmit}>
            <div className="preferencesFilter">
              <label>
              <input type="checkbox" name="Smoking?" value="true" onChange={this.update('smoking')}/>
              Smoking</label>

              <label>
              <input type="checkbox" name="Parking?" value="true" onChange={this.update('parking')}/>
              Has Parking</label>

              <label>
              <input type="checkbox" name="Wifi?" value="true" onChange={this.update('wifi')}/>
              Has Wifi</label>

              <label>
              <input type="checkbox" name="Takeout?" value="true" onChange={this.update('takeout')}/>
              Takeout</label>
            </div>

            <div className = "priceFilter">
              <label>
                <input type="checkbox" name="$" value='$' onChange={this.update('price')}/>
              $</label>

              <label>
              <input type="checkbox" name="$$" value='$$' onChange={this.update('price')}/>
              $$</label>

              <label>
              <input type="checkbox" name="$$$" value='$$$' onChange={this.update('price')}/>
              $$$</label>

              <label>
              <input type="checkbox" name="$$$$" value='$$$$' onChange={this.update('price')}/>
              $$$$</label>
            </div>
          </form>
        </nav>
      </nav>

      </div>
    );
  }


}

export default withRouter(SearchForm);
