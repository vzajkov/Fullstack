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
    const currentUser = this.props.currentUser;
    const history = this.props.history;
    const deleteReview = this.props.deleteReview;

    debugger
    return (
      <div>
        <div id="show-top-wrapper">
          <div id="show-name-wrapper">
            <h2 id="show-name">{showprops.name}</h2>
          </div>
          <br/>
          <div id="business-item-address-wrapper">
            <p>Address: </p>
            <p id="show-address">{showprops.address.street}</p>
            <p id="show-address">{showprops.address.town}</p>
            <p id="show-address">{showprops.address.state}</p>
            <p id="show-address">{showprops.address.country}</p>
          </div>
          <br/>
        </div>

        <p id="show-rating">Rating: {showprops.rating}</p>

        <div id="business-img-wrapper">
          <img src={"" + showprops.img_url}></img>
        </div>

          <div id="show-detailed-info-wrapper">
            <div id="inner-detailed-info-wrapper">
              <p className="titles"> Hours </p>
              <p> Monday: {showprops.detailed_info.sunday_hours}</p>
              <br/>
              <p> Tuesday: {showprops.detailed_info.monday_hours}</p>
              <br/>
              <p> Wednesday: {showprops.detailed_info.tuesday_hours}</p>
              <br/>
              <p> Thursday: {showprops.detailed_info.wednesday_hours}</p>
              <br/>
              <p> Friday: {showprops.detailed_info.thursday_hours}</p>
              <br/>
              <p> Saturday: {showprops.detailed_info.friday_hours}</p>
              <br/>
              <p> Sunday: {showprops.detailed_info.saturday_hours}</p>
              <br/>
              <p className="titles"> Detailed Info </p>
              <p id="show-smoking">Smoking: {showprops.detailed_info.smoking ? "yes" : "no" }</p>
              <br/>
              <p id="show-takeout">Takeout: {showprops.detailed_info.takeout ? "yes" : "no"}</p>
              <br/>
              <p id="show-wifi">Wifi: {showprops.detailed_info.wifi ? "yes" : "no"}</p>
              <br/>
              <p id="show-parking">Parking: {showprops.detailed_info.parking ? "yes" : "no"}</p>
            </div>
          </div>


        <Link id="link-to-create-review" to={{pathname: "/reviews/new", state: {id: this.props.match.params.id} }} >Write a review!</Link>

        <div id="show-reviews">
          <ul className="reviews-list">
            {showprops.reviews.map((review) => (
              <li id="review-index-item" review-list-item>
                 <ReviewIndexItem review={review} history={history} deleteReview={deleteReview} currentUser={currentUser} currentBusiness={showprops}  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


}

export default BusinessShow;
