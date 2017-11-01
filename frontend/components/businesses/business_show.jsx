import React from 'react';
import ReviewIndexItem from '../reviews/review_index_item.jsx';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  //componentDidMount



  render() {
    const showprops = this.props.businesses[this.props.match.params.id];
    debugger
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

        <Link to={{pathname: "/reviews/new", state: {id: this.props.match.params.id} }} >Write a review!</Link>

        <div id="show-reviews">
          <ul className="reviews-list">
            {showprops.reviews.map((review) => (
              <li review-list-item>
                 <ReviewIndexItem props={review } />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


}

export default BusinessShow;
