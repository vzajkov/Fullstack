import React from 'react';
import ReviewIndexItem from '../reviews/review_index_item.jsx';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);
  }

  //componentDidMount

  handleRating() {

    const rating = Math.floor(this.props.businesses[this.props.match.params.id].rating);
    if (rating === 1 ) {
      return (
        <div className="star-wrapper">
          <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        </div>
      );
    } else if (rating === 2) {
      return (
      <div className="star-wrapper">
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 3) {
      return (
      <div className="star-wrapper">
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 4) {

      return (
      <div className="star-wrapper">
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 5) {
      return (
      <div className="star-wrapper">
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <br/>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <br/>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <br/>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
        <br/>
        <div id="review-star"><i class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    }
  }


  render() {
    const showprops = this.props.businesses[this.props.match.params.id];
    const currentUser = this.props.currentUser;
    const history = this.props.history;
    const deleteReview = this.props.deleteReview;


    return (
      <div id="business-page-wrapper">
        <div id="show-top-wrapper">

          <div id="name-rating-address-wrapper">
            <div id="show-name-wrapper">
              <h2 id="show-name">{showprops.name}</h2>
            </div>
            <div id="show-rating">{this.handleRating()}</div>
            <div id="business-item-address-wrapper">
              <p>Address: </p>
              <p id="show-address">{showprops.address.street}</p>
              <p id="show-address">{showprops.address.town}, {showprops.address.state}</p>
            </div>
          </div>

          <div id="business-img-wrapper">
            <img src={"" + showprops.img_url}></img>
          </div>

          <Link id="link-to-create-review" to={{pathname: "/reviews/new", state: {id: this.props.match.params.id} }} >Write a review!</Link>
        </div>

        <div id="detailed-info-reviews-wrapper">
          <div id="show-reviews">
            <ul className="reviews-list">
              {showprops.reviews.map((review) => (
                <li id="review-index-item" >
                   <ReviewIndexItem
                     review={review}
                     history={history}
                     deleteReview={deleteReview}
                     currentUser={currentUser}
                     currentBusiness={showprops} />
                </li>
              ))}
            </ul>
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

        </div>
      </div>
    );
  }


}

export default BusinessShow;
