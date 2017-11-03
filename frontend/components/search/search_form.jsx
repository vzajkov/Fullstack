import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingStatus: false,
      smokingStatus: false,
      wifiStatus: false,
      takeoutStatus: false,
      $Status: false,
      $$Status: false,
      $$$Status: false,
      $$$$Status: false
    };
  }

  update(filter) {
    return e => {
      if (filter === 'name') {
        return this.props.props.updateFiltering(filter, e.currentTarget.value);
      } else {
        if (e.currentTarget.checked) {
            return this.props.props.updateFiltering(filter, true);
        } else {
           return this.props.props.updateFiltering(filter, false);
        }
    }
  };
  }



  toggleParking() {
    this.setState({ parkingStatus: !this.state.parkingStatus});
  }

  toggleSmoking() {
    this.setState({ smokingStatus: !this.state.smokingStatus});
  }

  toggleTakeout() {
    this.setState({ takeoutStatus: !this.state.takeoutStatus});
  }

  toggleWifi() {
    this.setState({ wifiStatus: !this.state.wifiStatus});
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  toggle$ () {
    this.setState({ $Status: !this.state.$Status});
  }

  toggle$$ () {
    this.setState({ $$Status: !this.state.$$Status});
  }

  toggle$$$ () {
    this.setState({ $$$Status: !this.state.$$$Status});
  }

  toggle$$$$ () {
    this.setState({ $$$$Status: !this.state.$$$$Status});
  }

  render() {
    debugger
    return (
      <div>

        <nav className="navbar">
          <p id="nav-kelp-logo">Kelp</p>
          <button id="log-out-button" onClick={this.props.props.logout} >Log Out</button>
          <form onSubmit={this.handleSubmit}>
            <div id="submit-searchbar-wrapper">
              <input id="find-submit" type="submit" value="Find"/>
              <input
                id="search-bar"
                type="text"
                placeholder="restuarants,cafes, diners"
                onChange={this.update('name')}/>
            </div>
          </form>


        <nav className="filter-nav">
          <form className="filter-bar">
            <div className="preferencesFilter">
              <label htmlFor="smoking" onClick={this.toggleSmoking.bind(this)} className={this.state.smokingStatus ? 'toggled-on' : 'toggled-off'}>
              Smoking</label>
              <input id="smoking" type="checkbox" name="Smoking?" value="true" onChange={this.update('smoking')}/>


              <label htmlFor="parking" onClick={this.toggleParking.bind(this)} className={this.state.parkingStatus ? 'toggled-on' : 'toggled-off'}>
              Has Parking</label>
              <input id="parking" type="checkbox" name="Parking?" value="true" onChange={this.update('parking')}/>

              <label htmlFor="wifi" onClick={this.toggleWifi.bind(this)} className={this.state.wifiStatus ? 'toggled-on' : 'toggled-off'}>
                Has Wifi</label>
              <input id="wifi" type="checkbox" name="Wifi?" value="true" onChange={this.update('wifi')}/>

            <label htmlFor="takeout" onClick={this.toggleTakeout.bind(this)} className={this.state.takeoutStatus ? 'toggled-on' : 'toggled-off'}>
              Takeout</label>
            <input id="takeout" type="checkbox" name="Takeout?" value="true" onChange={this.update('takeout')}/>
            </div>

            <div className = "priceFilter">
              <label htmlFor="d" onClick={this.toggle$.bind(this)} className={this.state.$Status ? 'toggled-on' : 'toggled-off'}>
              $</label>
            <input id="d" type="checkbox" name="$" value='$' onChange={this.update('d')}/>

              <label htmlFor="dd" onClick={this.toggle$$.bind(this)} className={this.state.$$Status ? 'toggled-on' : 'toggled-off'} >
              $$</label>
            <input id="dd" type="checkbox" name="$$" value='$$' onChange={this.update('dd')}/>

              <label htmlFor="ddd" onClick={this.toggle$$$.bind(this)} className={this.state.$$$Status ? 'toggled-on' : 'toggled-off'}>
              $$$</label>
            <input id="ddd" type="checkbox" name="$$$" value='$$$' onChange={this.update('ddd')}/>

              <label htmlFor="dddd" onClick={this.toggle$$$$.bind(this)} className={this.state.$$$$Status ? 'toggled-on' : 'toggled-off'} >
              $$$$</label>
            <input id="dddd" type="checkbox" name="$$$$" value='$$$$' onChange={this.update('dddd')}/>
            </div>
          </form>
        </nav>
      </nav>

      </div>
    );
  }


}

export default withRouter(SearchForm);
