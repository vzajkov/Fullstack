import React from 'react';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showprops = this.props.businesses[this.props.match.params.id];
    return (
      <div>
        <div id="show-top-wrapper">
          <div id="show-name-wrapper">
            <h1 id="show-name">{showprops.name}</h1>
          </div>
          <br/>
          <p>Address: </p>
          <p id="show-rating">Rating: {showprops.rating}</p>
          <p id="show-address">{showprops.address.street}</p>
          <p id="show-address">{showprops.address.town}</p>
          <p id="show-address">{showprops.address.state}</p>
          <p id="show-address">{showprops.address.country}</p>
          <br/>
        </div>

        <div id="show-detailed-info">
          <div id="show-detailed-inner-wrapper">
            <p id="show-smoking">Smoking: {showprops.detailed_info.smoking ? "yes" : "no" }</p>
            <br/>
            <p id="show-takeout">Takeout: {showprops.detailed_info.takeout ? "yes" : "no"}</p>
            <br/>
            <p id="show-wifi">Wifi: {showprops.detailed_info.wifi ? "yes" : "no"}</p>
            <br/>
            <p id="show-parking">Parking: {showprops.detailed_info.parking ? "yes" : "no"}</p>
          </div>
        </div>
      </div>
    );
  }


}

export default BusinessShow;
